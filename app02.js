var request = require('request');

var apiUrl = 'https://restcountries.eu/rest/v1/name/united';

request(apiUrl, function(error, response, body) {
  if(error) {
    console.log(error);
  } else {
    var newBody = JSON.parse(body);
    console.log(newBody);
  }
});