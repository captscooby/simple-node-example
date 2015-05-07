var request = require('request');
var _ = require('lodash');
var express = require('express');
var app = express();

var apiUrl = 'https://restcountries.eu/rest/v1/all';

app.get('/', function(req, res) {
  request(apiUrl, function(error, response, body) {
    if(error) {
      console.log(error);
    } else {
      var textOutput = '';
      var newBody = JSON.parse(body);
      _.forEach(newBody, function(item) {
        textOutput += item.name + '<br>';
      });
      res.send(textOutput);
    }
  });
});

var server = app.listen(2222, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

