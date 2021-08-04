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

app.listen(port);
module.exports = app;
