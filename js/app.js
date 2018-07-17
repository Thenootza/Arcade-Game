// Enemies our player must avoid
var Enemy = function() {
    this.x = x;
    this.y = y;
    this.speed = 150;
    this.height = 70;
    this.width = 100;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
      if (this.x > 505) {
        this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
  this.x = x;
  this.y = y;
  this.lives = 3;
  this.level = 1;
  this.move = true;
  this.height = 50;
  this.width = 150;
  this.speed = 150;
  this.sprite = 'images/char-princess-girl.png';
}

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 0 || this.x > 400) {
       if(this.x < 0){
           this.x = 0;
       }
       else{
           this.x = 400;
       }
   }
   if (this.y < 0 || this.y > 400) {
       if(this.y < 0){
           this.reset();
       }
       else{
           this.y = 400;
       }
   }
};

Player.prototype.reset = function() {
        this.y = 400;
        this.x = 0;
        console.log(this.lives);
        if (this.lives == 0) {
            setTimeout (function() {
            alert('YOU LOSE!');
            },100);
        }
};

// Draw the enemy on the screen, required method for game
PLayer.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    if (direction == 'left') {
        this.x -= 100;
    }

    if (direction == 'right') {
        this.x += 100;
    }

    if (direction == 'up') {
        this.y -= 83;
    }

    if (direction == 'down') {
        this.y += 83;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var firstEnemy = var Enemy(150,150);
var secondEnemy = var Enemy(80,250);
var thirdEnemy = var Enemy(200,350);
var allEnemies = [firstEnemy, secondEnemy, thirdEnemy];
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
