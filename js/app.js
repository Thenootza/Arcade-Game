var Player = function() {
  this.x = x;
  this.y = y;
  this.lives = 3;
  this.level = 1;
  this.move = true;
  this.speed = 150;
  this.sprite = 'images/char-princess-girl.png';
}
// Enemies our player must avoid
var Enemy = function() {
    this.x = x;
    this.y = y;
    this.speed = 150;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var firstEnemy = var Enemy(0,150),
    secondEnemy = var Enemy(0,250),
    thirdEnemy = var Enemy(0,350),
    allEnemies = [firstEnemy, secondEnemy, thirdEnemy];
// Place the player object in a variable called player
var player = new Player(0,450);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
