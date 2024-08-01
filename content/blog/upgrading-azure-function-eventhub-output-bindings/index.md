---
title: "Upgrading Azure Functions with EventHub ingest: In-process to isolated worker model"
date: "2024-08-01"
categories: 
  - "programming"
  - "software-engineering"
coverImage: "images/azure-function-logo.png"
---

# Intro
Recently, I've had to upgrade several Azure Functions from in-process to isolated models in order to prepare for [support ending for the in-process model](https://learn.microsoft.com/en-us/azure/azure-functions/migrate-dotnet-to-isolated-model?tabs=net8).

I specifically ran into problems with serialization of EventData, which should be supported by the [recommended output bindings as seen here](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-hubs?tabs=isolated-process%2Cextensionv5&pivots=programming-language-csharp#binding-types).


## EventHub Output Bindings
Previously, the Azure Functions used the standard IAsyncCollector to add messages to an EventHub.

Afterwards, I switched to using the [EventHubOutput attribute](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-hubs-output?tabs=python-v2%2Cisolated-process%2Cnodejs-v4%2Cfunctionsv2%2Cextensionv5&pivots=programming-language-csharp#example).
However, for reasons unbeknownst to me, it seemed like the serialization didn't work, and instead only ran a ToString() on my EventData arrays, whenever I looked at the data ingested in the EventHub.

I did fiddle with reinserting Newtonsoft as the default serializer to avoid risking too many changes in the data ingest, so I don't know if that could've been an issue.

## EventHubClientProducer
An alternative for the  is the [EventHubProducerClient](https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.eventhubs.producer.eventhubproducerclient?view=azure-dotnet).

It's not as neat and simple as adding an output binding attribute and returning a value, but it solved my deserialization issues, but you can very easily inject this class with your EventHub connection string, and afterwards use it to pipe your EventData to your desired EventHub.

It also fits well with the flow of your code, if you're already using the IAsyncCollector, as you can simply replace calls made to the IAsyncCollector with this client. Underneath, I believe the both use the same EventHub client object to send the data.

An interesting piece of data I noticed as a result of doing this upgrade, was that even if the receiving EventHub received just as many bytes and incoming messages as always, the number of requests to the EventHub fell by about 50%. I haven't made further calculations on whether it's a big improvement in terms of pricing, but I'd love to hear, if anybody else has seen the same. A guess would be that the IAsyncCollector has sent EventData in small batches.

![](images/.png)![](images/.png)