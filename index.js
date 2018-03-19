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
    users[socketId].startMove(direction.direction)
  });
  socket.on('stopMove', function () {
    users[socketId].stopMove()
  });
  socket.on('startRotate', function (direction) {
    users[socketId].startRotate(direction.direction)
  });
  socket.on('stopRotate', function () {
    users[socketId].stopRotate()
  });
});