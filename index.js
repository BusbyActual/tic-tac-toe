var express = require('express')
var app = express();
var path = require('path');


app.post('/moves/:player/:move', function(req,res){
  res.send('Nice one!');
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(1337, function () {
  console.log('App listening on port 1337!')
});