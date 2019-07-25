function Paddle() {

    this.width = 10;
    this.height = game.height/4

    this.y = (game.height / 2) - (this.height / 2)
    this.x = game.width - 20

    this.xVelocity = 0
    this.yVelocity = 2

}

Paddle.prototype = Object.create(Entity.prototype)
Paddle.prototype.constructor = Paddle

Paddle.prototype.update = function () {
    Entity.prototype.update.apply(this, arguments)
    if (game.keyPressed.up) {
      this.yVelocity = -2
    }

    if (game.keyPressed.down) {
      this.yVelocity = 2
    }

    if (!game.keyPressed.up && !game.keyPressed.down) {
      this.yVelocity = 0
    }

}

Paddle.prototype.draw = function (context) {
    context.fillStyle = "white"
    context.fillRect(this.x, this.y, this.width, this.height)
}

