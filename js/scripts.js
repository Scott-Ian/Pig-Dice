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

Player.prototype.tempScoreCheck = function() {
  return this.tempScore;
}

Player.prototype.currentScoreCheck = function () {
  return this.currentScore;
}

Player.prototype.addToTempScore = function (number) {
  this.tempScore += number;
}

Player.prototype.addToCurrentScore = function() {
  this.currentScore += this.tempScore;
  this.tempScore = 0;
}

Player.prototype.isTurnOver = function () {
  if (this.dice.currentRoll === 1) {
    return true;
  } else {
    return false;
  }
}

// Dice Object and Prototypes Start Here
function Dice (minNumber, maxNumber) {
  this.minNumber = minNumber;
  this.maxNumber = maxNumber;
  this.currentRoll = 0;
}

Dice.prototype.rollDice = function() {
  return Math.floor(Math.random() * (this.maxNumber - this.minNumber +1)) + this.minNumber;
}

// Business Logic Functions Start Here


// UI Logic
function switchPlayers (player1, player2) {
  let activePlayer;
  if (player1.isTurn === true) {
    player1.isTurn = false;
    currentPlayer = player2;
  } else {
    player2.isTurn = false;
    currentPlayer = player1;
  }
  return activePlayer;
}


$(document).ready(function () {
  let gameStart = false;
  let player1;
  let player2;
  let newGame;
  let activePlayer;

  $("button#start").click(function () {
    player1 = new Player (true, 0, 0)
    player2 = new Player (false, 0, 0)
    newGame = new Game(player1, player2);
    gameStart = true;
    $("#play-space").show();
  })

  activePlayer = player1;

  $("button#roll").click(function() {
    if (gameStart === true) {
      player1.dice.currentRoll = player1.dice.rollDice();
      $("span#current-roll").text(player1.dice.currentRoll);
      if (player1.isTurnOver() === true) {
        alert("Turn is over");
      } else {
        player1.addToTempScore (player1.dice.currentRoll);   
      }
    } else {
      alert("Please Start Game First");
    }
  });

  $("button#hold").click(function () {

  });



});