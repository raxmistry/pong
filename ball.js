function Ball() {
    Entity.call(this)

    this.width = 20
    this.height = 20

    this.x = game.width/2
    this.y = game.height/2

    this.xVelocity = 1
    this.yVelocity = 1

}
Ball.prototype = Object.create(Entity.prototype)
Ball.prototype.constructor = Ball

Ball.prototype.update = function() {
    Entity.prototype.update.apply(this, arguments)

    if (this.x > (game.width - this.width) || this.x < 0) {
        this.xVelocity *= -1
    }

    if (this.y > (game.height - this.height) || this.y < 0) {
        this.yVelocity *= -1 
    }
    if (this.intersect(game.computer) || this.intersect(game.paddle)) {
        this.xVelocity *= -1
    }
}

Ball.prototype.draw = function (context) {
    context.fillStyle = "white"    
    context.fillRect(this.x, this.y, this.width, this.height)
}

