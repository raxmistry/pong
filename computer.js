function Computer() {

    this.width = 10;
    this.height = game.height/4

    this.y = (game.height / 2) - (this.height / 2)
    this.x = 5

    this.xVelocity = 0
    this.yVelocity = 2

}

Computer.prototype = Object.create(Entity.prototype)
Computer.prototype.constructor = Computer

Computer.prototype.update = function () {

    if ( ((this.y + this.height) > game.height) ||
        (this.y < 0)){
        this.yVelocity *= -1
    } else if
    ((this.y > game.ball.y)) {
        this.yVelocity *= -1 
    } else if 
    ((this.y+this.height) < game.ball.y) {
        this.yVelocity *= -1 
    }
    this.y += this.yVelocity
}

Computer.prototype.draw = function (context) {
    context.fillStyle = "white"
    context.fillRect(this.x, this.y, this.width, this.height)
}

