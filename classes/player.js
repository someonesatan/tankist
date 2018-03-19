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
        angle: this.currentAngle
      })
    }, 17)
  }

  startMove(direction) {
    this.moveTimer = setInterval(() => {
      this.move(direction)
    }, 17)
  }

  stopMove() {
    clearInterval(this.moveTimer)
  }

  move(direction) {
    console.log(direction)
    this.x += (this.speed * Math.cos(this.currentAngle * Math.PI / 180)) * direction;
    this.y += (this.speed * Math.sin(this.currentAngle * Math.PI / 180)) * direction;
  }

  startRotate(direction) {
    this.rotateTimer = setInterval(() => {
      this.rotate(direction)
    }, 17)
  }
  stopRotate() {
    clearInterval(this.rotateTimer)
  }

  rotate(direction) { 
    this.currentAngle += 2 * direction;
  }
}

module.exports = Player