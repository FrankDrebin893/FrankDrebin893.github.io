var express = require('express')
var app = express()
const port = process.env.PORT || 3005
var path = require('path');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const compiler = webpack(webpackConfig);

//app.use('/public', express.static(path.join(__dirname, 'src/client/public')));
//app.use(express.static(__dirname + '/src/client/public'));


app.get('*', function (req, res) {
  res.sendFile(__dirname + '/src/client/public/indexTwo.html');
})

/*app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'src/client/public', 'indexTwo.html'))
})*/

var server = app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
})