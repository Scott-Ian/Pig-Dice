// Business Logic

// Game Object and Prototypes Start Here
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.activePlayer;
}

Game.prototype.switchActivePlayer = function() {
  if (this.player1.isTurn === true) { // this is to take whose turn it is NOW and switch
    this.player1.isTurn = false;
    this.player2.isTurn = true;
    this.player1 = this.activePlayer; // updates player 1 with activePlayer object updates
    this.activePlayer = this.player2; //sets active player to player2 object
  } else if (this.player2.isTurn === true) {
    this.player2.isTurn = false;
    this.player1.isTurn = true;
    this.player2 = this.activePlayer;
    this.activePlayer = this.player1;
  }
  else {
    this.activePlayer = this.player1;
    this.player1.isTurn = true;
  }
}

// we are updating only activeplayer and then saving those instances to player 1 or 2
Game.prototype.winStateCheck = function() {
  if (this.activePlayer.currentScore >= 100) {
    return true;
  }
}

// Player Object and Prototypes Start Hhere
function Player(name) {
  this.name = name;
  this.isTurn = false;
  this.tempScore = 0;
  this.currentScore = 0;
  this.dice = new Dice (1, 6);
}

Player.prototype.tempScoreCheck = function() {
  return this.tempScore;
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

// UI Logic
function switchCurrentPlayerDisplay(newGame) {
  if (newGame.player1.isTurn === true) {
    $("span#current-player").text("Player 1");
  } else {
    $("span#current-player").text("Player 2");
  }
}

function winStateEngage(newGame) {
  $("#winner-space").show();
  $("span#winner-name").text(newGame.activePlayer.name);
  document.getElementById("hold").disabled = true;
  document.getElementById("roll").disabled = true;
}

$(document).ready(function() {
  let gameStart = false;
  let newGame;
  
  $("button#start").click(function() {
    let player1 = new Player ("Player 1");
    let player2 = new Player ("Player 2");
    newGame = new Game(player1, player2);
    gameStart = true;
    newGame.switchActivePlayer();
    switchCurrentPlayerDisplay(newGame);
    $("#play-space").show();
  })

  $("button#roll").click(function() {
    if (gameStart === true) {
      $("#rolled-one").hide();
      newGame.activePlayer.dice.currentRoll = newGame.activePlayer.dice.rollDice();
      $("span#current-roll").text(newGame.activePlayer.dice.currentRoll);
      if (newGame.activePlayer.isTurnOver() === true) {
        $("#rolled-one").show();
        newGame.activePlayer.tempScore = 0;
        $("span#round-total").text(newGame.activePlayer.tempScore);
        newGame.switchActivePlayer();
        switchCurrentPlayerDisplay(newGame);
      } else {
        newGame.activePlayer.addToTempScore (newGame.activePlayer.dice.currentRoll);
        $("span#round-total").text(newGame.activePlayer.tempScore);
      }
    }
  });
  
  $("button#hold").click(function () {
    if (newGame.activePlayer.tempScore != 0) {
      newGame.activePlayer.addToCurrentScore();
      if (newGame.winStateCheck() === true) {
        winStateEngage(newGame);
      }
        if (newGame.player1.isTurn === true) {
          $("span#player-1-score").text(newGame.activePlayer.currentScore);
          newGame.switchActivePlayer();
          switchCurrentPlayerDisplay(newGame);
        } else {
          $("span#player-2-score").text(newGame.activePlayer.currentScore);
          newGame.switchActivePlayer();
          switchCurrentPlayerDisplay(newGame);
        }
    }
  });
  
  $("button#reset").click(function() {
    location.reload();
  });
});