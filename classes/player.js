class Player {
  constructor(x, y, speed, currentAngle, connectionId, io) {
    this.x = x,
    this.y = y,
    this.speed = speed,
    this.currentAngle = currentAngle
    //this.connectionId = connectionId
    this.updateState(connectionId, io)
  }

  updateState(connectionId, io) {
    setInterval(() => {
      io.to(connectionId).emit('updateState', {
        x: this.x,
        y: this.y,
        currentAngle: this.currentAngle
      })
    }, 17)
  }

  move(direction) {
    this.x += (this.speed * Math.cos(this.currentAngle * Math.PI / 180)) * direction;
    this.y += (this.speed * Math.sin(this.currentAngle * Math.PI / 180)) * direction;
  }

  rotate(direction) { 
    this.currentAngle += 2 * direction;
  }
}

module.exports = Player