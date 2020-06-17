// Business Logic

// Game Object and Prototypes Start Here
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.winStateCheck = function(playerScore){
  return true;
}

// Player Object and Prototypes Start Hhere
function Player(isTurn, tempScore, currentScore) {
  this.isTurn = isTurn;
  this.tempScore = tempScore;
  this.currentScore = currentScore;
  this.dice = new Dice (1, 6);
}

Player.prototype.turnCheck = function() {
  return this.isTurn;
}

Player.prototype.tempScoreCheck = function() {
  return this.tempScore;
}

Player.prototype.currentScoreCheck = function () {
  return this.currentScore;
}

Player.prototype.addToCurrentScore = function() {
  this.currentScore += this.tempScore;
  this.tempScore = 0;
}

Player.prototype.isTurnOver = function () {
  if (this.dice.currentRole === 1) {
    return true;
  } else {
    return false;
  }
}

// Dice Object and Prototypes Start Here
function Dice (minNumber, maxNumber) {
  this.minNumber = minNumber;
  this.maxNumber = maxNumber;
  this.currentRole = 0;
}

Dice.prototype.rollDice () {
  return Math.floor(Math.random() * (this.maxNumber - this.minNumber +1)) + minNumber;
}

// Business Logic Functions Start Here





// UI Logic