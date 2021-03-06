// Enemies our player must avoid
var Enemy = function(x,y) {
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
  this.height = 50;
  this.width = 30;
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
        this.lives--;
        this.reset();
    }
    else{
        this.y = 400;
    }
}
this.checkCollisions();
};

Player.prototype.reset = function() {
        this.y = 400;
        this.x = 0;
        if (this.lives == 0) {
            setTimeout (function() {
            alert(':( You lost!');
            },100);
        }
};

//When a collision occurs a live is substracted
Player.prototype.checkCollisions = function() {

    for (var i = 0; i < allEnemies.length; i++) {
        if ((this.x < allEnemies[i].x + allEnemies[i].width) && (this.x + this.width > allEnemies[i].x) && (this.y < allEnemies[i].y + allEnemies[i].height) && (this.height + this.y > allEnemies[i].y)) {
            this.lives--;
            this.reset();
        }
        else if ((this.x < heart.x + heart.width) && (this.x + this.width > heart.x) && (this.y < heart.y + heart.height) && (this.height + this.y > heart.y)) {
          setTimeout (function() {
            alert('Congratulations, you won! :)');
            }, 100);
            this.reset();
        }
    }
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

//Drows the player to the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Heart = function(x,y) {
    this.x = x;
    this.y = y;
    this.height = 25;
    this.width = 25;
    this.sprite = 'images/Heart.png';
};

Heart.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var firstEnemy = new Enemy(10,60),
    secondEnemy = new Enemy(60,150),
    thirdEnemy = new Enemy(70,230),
    allEnemies = [];
allEnemies.push(firstEnemy);
allEnemies.push(secondEnemy);
allEnemies.push(thirdEnemy);
// Place the player object in a variable called player
var player = new Player(0,400);

var heart = new Heart(400,0);

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
