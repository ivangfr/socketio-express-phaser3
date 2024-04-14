var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  backgroundColor: '#ffffff',
  physics: {
    default: 'arcade',
    arcade: {
      // debug: true,
      gravity: { y: 0 }
    }
  },
  scene: { preload, create, update }
}

var game = new Phaser.Game(config)

function preload() {
  this.load.image('car', 'static/assets/car.png')
}

function create() {
  const self = this
  this.socket = io()
  this.otherPlayers = this.physics.add.group()

  this.socket.on('currentPlayers', function (players) {
    Object.keys(players).forEach(function (id) {
      if (players[id].playerId === self.socket.id) {
        addPlayer(self, players[id])
      } else {
        addOtherPlayers(self, players[id])
      }
    })
  })

  this.socket.on('newPlayer', function (playerInfo) {
    addOtherPlayers(self, playerInfo)
  })

  this.socket.on('playerDisconnected', function (playerId) {
    self.otherPlayers.getChildren().forEach(function (otherPlayer) {
      if (playerId === otherPlayer.playerId) {
        otherPlayer.destroy()
      }
    })
  })

  this.cursors = this.input.keyboard.createCursorKeys()

  this.socket.on('playerMoved', function (playerInfo) {
    self.otherPlayers.getChildren().forEach(function (otherPlayer) {
      if (playerInfo.playerId === otherPlayer.playerId) {
        otherPlayer.setRotation(playerInfo.rotation)
        otherPlayer.setPosition(playerInfo.x, playerInfo.y)
      }
    })
  })
}

function addPlayer(self, playerInfo) {
  self.car = self.physics.add.image(playerInfo.x, playerInfo.y, 'car')
    .setOrigin(0.5, 0.5)
    .setDisplaySize(100, 70)

  self.car.setCollideWorldBounds(true)
  self.car.setTint(playerInfo.color)
  self.car.setDrag(1000)
}

function addOtherPlayers(self, playerInfo) {
  const otherPlayer = self.physics.add.image(playerInfo.x, playerInfo.y, 'car')
    .setOrigin(0.5, 0.5)
    .setDisplaySize(100, 70)
    .setRotation(playerInfo.rotation)
    
  otherPlayer.playerId = playerInfo.playerId
  otherPlayer.setTint(playerInfo.color)
  self.otherPlayers.add(otherPlayer)
}

function update() {
  if (this.car) {
    if (this.cursors.left.isDown && (this.cursors.up.isDown || this.cursors.down.isDown)) {
      this.car.setAngularVelocity(-100)
    } else if (this.cursors.right.isDown && (this.cursors.up.isDown || this.cursors.down.isDown)) {
      this.car.setAngularVelocity(100)
    } else {
      this.car.setAngularVelocity(0)
    }

    const velX = Math.cos((this.car.angle - 360) * 0.01745)
    const velY = Math.sin((this.car.angle - 360) * 0.01745)
    if (this.cursors.up.isDown) {
      this.car.setVelocityX(200 * velX)
      this.car.setVelocityY(200 * velY)
    } else if (this.cursors.down.isDown) {
      this.car.setVelocityX(-100 * velX)
      this.car.setVelocityY(-100 * velY)
    } else {
      this.car.setAcceleration(0)
    }

    const currPosition = {
      x: this.car.x,
      y: this.car.y,
      rotation: this.car.rotation
    }
    if (this.car.oldPosition && (
          currPosition.x !== this.car.oldPosition.x ||
          currPosition.y !== this.car.oldPosition.y ||
          currPosition.rotation !== this.car.oldPosition.rotation)) {
      this.socket.emit('playerMovement', currPosition)
    }

    this.car.oldPosition = currPosition
  }
}
