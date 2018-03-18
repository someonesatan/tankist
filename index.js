var express = require('express')
var app = express()
var path = require('path')
var server = require('http').createServer(app)
var io = require('socket.io')(server)
var port = process.env.PORT || 8080

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

io.on('connection', function (socket) {

  console.log('connected')

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    
  });
});