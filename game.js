// The game engine

function Game(canvas) {
    var self = this

    this.context = canvas.getContext("2d")
    this.width = canvas.width
    this.height = canvas.height

    // Keep track of key states
    // Eg.:
    //   gamefkeyPressed.up === true  // while UP key is pressed
    //   game.keyPressed.up === false // when UP key is released
    this.keyPressed = {}

    $(canvas).on('keydown keyup', function(e) {
        // Convert key code to key name
        var keyName = Game.keys[e.which]

        if (keyName) {
            // eg.: `self.keyPressed.up = true` on keydown
            // Will be set to `false` on keyup
            self.keyPressed[keyName] = e.type === 'keydown'
            e.preventDefault()
        }
    })
}
//
// Some key codes to key name mapping
Game.keys = {
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
}

Game.prototype.draw = function () {
    var self = this
    this.entities.forEach(function(entity){
        if (entity.draw) {
            entity.draw(self.context)
        }
    })

}

Game.prototype.update = function () {
    var self = this
    this.entities.forEach(function(entity){
        if(entity.update) {
            entity.update()
        }
    })
}

Game.prototype.start = function() {
    var self = this

    var interval = 1000/60
    setInterval( function () {
        self.update()
        self.draw()
    }, interval)

}

function Background() {}
Background.prototype.draw = function(context) {
    context.fillStyle = "black"
    context.fillRect(0, 0, game.width, game.height)
}


var game = new Game($('canvas')[0])

game.entities = [
    new Background(),
    game.computer = new Computer(),
    game.paddle = new Paddle(),
    game.ball = new Ball()
]

game.start()
$('canvas')[0].focus()

