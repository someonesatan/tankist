var express = require('express')
var app = express()
var path = require('path')
var server = require('http').createServer(app)
var io = require('socket.io')(server)
var port = process.env.PORT || 8080

const Player = require('./classes/player.js')


server.listen(port, function () {
  console.log('Server listening at port %d', port);
})

const users = {}

io.on('connection', function (socket) {

  console.log('connected')

  let socketId = socket.id
  users[socketId] = new Player(130, 130, 2, 0, socketId, io)

  socket.on('startMove', function (direction) {
    users[socketId].move(direction)
  });
  
  socket.on('stopMove', function () {
    console.log('stopMove')
  });
  socket.on('startRotate', function (direction) {
    console.log(`startRotate`)
    console.log(JSON.parse(direction))
  });
  socket.on('stopRotate', function () {
    console.log('stopRotate')
  });
});