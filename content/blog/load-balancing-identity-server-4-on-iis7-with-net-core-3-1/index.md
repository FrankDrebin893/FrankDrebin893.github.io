---
title: "Preparing Identity Server 4 in .NET Core 3.1 for load balancing with Azure Key Vault"
date: "2020-10-19"
categories: 
  - "software-engineering"
---

When load balancing your IS4 solution, it's important to ensure that all your servers have access to the same signing credentials and key storage for data protection.

For this post, we'll work with x509 certificates in .NET Core 3.1.

## The problem

IS4 performs both token encryption as well as encryption of cookies etc.  
For this reason you're gonna run into issues, if your nodes don't have access to the exact same credentials.

If two nodes have different credentials, they won't be able to understand nor validate tokens or cookies signed by the other.

## Signing credentials

In IS4 terms, the signing credentials are the credentials used to sign JWTs.  
It's important that every instance of your IS4 has access to the same signing certificate.

You can do this in several ways.

#### Azure Key Vault

If you have access to Azure Key Vault, this is probably your easiest option. You'll need to set up a service principal.

Install the Microsoft.Extensions.Configuration.AzureKeyVault package in your project to get the AddAzureKeyVault extension method below.

By running the extension method, all values in your key vault gets loaded in as key value pairs, which you can grab just like any other config value.  

Host.CreateDefaultBuilder(args)
.ConfigureAppConfiguration((context, config) => {
    config.AddAzureKeyVault("Your endpoint", "Your client Id", "Your client secret");
}

However, your certificates are put in as values as Base64 encoded strings, so you need to do a little work to convert them to an X509Certificate, which can do in this way:

var base64EncodedCert = configuration.GetValue<string>("Your certificate's name in the key vault");
var certificateBytes = Convert.FromBase64String(base64EncodedCert);
var x509Cert = new X509Certificate2(certificateBytes, string.Empty, X509KeyStorageFlags.EphemeralKeySet);

The first parameter in the array is of course the certificates information.

The empty string is the password, since the KeyVault strips away any password protection on your certificates.

Lastly the storage flag, I've set to EphemeralKeySet, which means it only gets loaded in Memory. By default, any X509Certificate2 will be attempted installed in the MMC, which can give issues, if you haven't set user profile loading as enabled. Else you can set it to MachineKeySet, but I actually only need the certificate in-memory. As long as the application gets the certificate this way on every startup, it works.

Now that you've pulled out the certificate, all you need to do is load it into the AddSigningCredentials method that comes with the standard IS4 configuration.

#### Using the MMC

You can install certificates in the Personal directive, but I dislike this option, because it's tricky to scale. If you need to set a new instance of IS4 up, you'll need to install the certificate on that server as well, and enable access to make sure the app can reach the certificate.

## Data protection

In .NET Core, the machine key has been replaced with the data protection API. The Data Protection API is what IS4 uses to sign cookies, whereas the signing credentials get used for signing tokens. Therefore it is equally important for your app to work that all nodes share the same keys.

By default the data protection API will use an in-memory key set, which is not good.

Now that you've loaded your certificates correctly, you can further increase the protection by encrypting the keys, once they get stored in the database of your choice.

[https://docs.microsoft.com/en-us/aspnet/core/security/data-protection/implementation/key-storage-providers](https://docs.microsoft.com/en-us/aspnet/core/security/data-protection/implementation/key-storage-providers)

### Adding the data protection storage

I would definitely recommend Redis for this. SQL Server also works well, but you need to set up a database table for this purpose, which is far more work than what you need to do with Redis. Since Azure also provides access to Redis storage, you can set up Redis, install the Redis extension Nuget package, and add data protection for full scalability as seen below.

public void ConfigureServices(IServiceCollection services)
{
    var redis = ConnectionMultiplexer.Connect("<URI>");
    services.AddDataProtection()
        .PersistKeysToStackExchangeRedis(redis, "DataProtection-Keys");
        .ProtectKeysWithCertificate(YourX509CertHere) // Not mandatory but good practice
}

Now your standard IS4 is ready to run in a load balanced setup.

## IIS configuration and access to certificate storage

One issue I ran into was access issues to the MMC, and the IS4 events might pump out an error like the one below.

In this case you're most likely having issues with either reading from the MMC or installing a certificate in it, so you can run into this issue all ways.

The reason I recommended using an in-memory certificate(Ephemeral Key Set) is because IIS applications by default have a flag called "Load User Profile" set to false. In this case, your application won't have access to the Personal MMC store, and you'll wind up with this error.

Unhandled exception: "Keyset does not exist" ";"Internal.Cryptography.CryptoThrowHelper+WindowsCryptographicException: Keyset does not exist
   at System.Security.Cryptography.CngKey.Open(String keyName, CngProvider provider, CngKeyOpenOptions openOptions)
   at Internal.Cryptography.Pal.CertificatePal.GetPrivateKey\[T\](Func\`2 createCsp, Func\`2 createCng)
   at ...
IdentityServer4.Hosting.IdentityServerMiddleware.Invoke(HttpContext context, IEndpointRouter router, IUserSession session, IEventService events)
      
 Connection ID ""17365880169046365174"", Request ID ""800253f9-0001-f100-b63f-84710c7967bb"": An unhandled exception was thrown by the  application.";
   "Internal.Cryptography.CryptoThrowHelper+WindowsCryptographicException: Keyset does not exist
   at System.Security.Cryptography.CngKey.Open(String keyName, CngProvider provider, CngKeyOpenOptions openOptions)
   at Internal.Cryptography.Pal.CertificatePal.GetPrivateKey\[T\](Func\`2 createCsp, Func\`2 createCng)
    ......   Microsoft.AspNetCore.Server.IIS.Core.IISHttpContextOfT\`1.ProcessRequestAsync()
