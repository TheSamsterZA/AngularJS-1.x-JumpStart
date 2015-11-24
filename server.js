var static = require('node-static');
var http = require('http');
var file = new (static.Server)();
var app = http.createServer(function (req, res) {
  file.serve(req, res);
});

app.listen(8888, 'localhost');
