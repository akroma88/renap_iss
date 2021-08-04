const request = require('request');
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output" : "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output" : "Hello World!"
  });
});

app.get('/consultaDpi', function(req, res) {
  var body;
  body = {"id":"123"};
  res.json( [body] )
  console.log('Hello, I am foo.');
});


app.get('/entregaDPI', function(req, res) {
  var body;
  body = {"id":"123", "estado":true};
  res.json( [body] )
  console.log('Hello, I am foo.');
});


app.get('/grupo21', function(req, res) {
  request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res2, body) => {
  if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
    res.json(body.explanation);
  });
});






app.listen(port);
module.exports = app;
