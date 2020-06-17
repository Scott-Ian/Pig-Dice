// Business Logic

// Game Object and Prototypes Start Here
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.activePlayer;
}

Game.prototype.switchActivePlayer = function() {
  if (this.player1.isTurn === true) {
    this.player1.isTurn = false;
    this.player1 = this.activePlayer;
    this.activePlayer = this.player2;
  } else if (this.player2.isTurn === true) {
    this.player2.isTurn = false;
    this.player2 = this.activePlayer;
    this.activePlayer = this.player1;
  }
  else {
    this.activePlayer = this.player1;
    this.player1.isTurn = true;
  }
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
$(document).ready(function() {
  let gameStart = false;
  let player1;
  let player2;
  let newGame;
  
  $("button#start").click(function() {
    player1 = new Player (false, 0, 0)
    player2 = new Player (false, 0, 0)
    newGame = new Game(player1, player2);
    gameStart = true;
    newGame.switchActivePlayer();
    $("#play-space").show();
  })

  $("button#roll").click(function() {
    if (gameStart === true) {
      newGame.activePlayer.dice.currentRoll = newGame.activePlayer.dice.rollDice();
      $("span#current-roll").text(newGame.activePlayer.dice.currentRoll);
      if (newGame.activePlayer.isTurnOver() === true) {
        alert("Turn is over");
        newGame.activePlayer.tempScore = 0;
        $("span#round-total").text(newGame.activePlayer.tempScore);
        newGame.switchActivePlayer();
      } else {
        newGame.activePlayer.addToTempScore (newGame.activePlayer.dice.currentRoll);
        $("span#round-total").text(newGame.activePlayer.tempScore);
      }
    } else {
      alert("Please Start Game First");
    }
  });
  
  $("button#hold").click(function () {
    if (newGame.activePlayer.tempScore != 0) {
      newGame.activePlayer.addToCurrentScore();
      if (newGame.player1.isTurn === true) {
        $("span#player-1-score").text(newGame.activePlayer.currentScore);
        newGame.switchActivePlayer();
      } else {
        $("span#player-2-score").text(newGame.activePlayer.currentScore);
        newGame.switchActivePlayer();
      }
    }
  });
  
  $("button#reset").click(function() {
    location.reload();
  });
});

// To-DO list

//2. Make sure we update scores when necessary
//2. Add in victory/win state conditions
//4. Display win Statements upon victory
//5. Remove Alerts and replace with warning messages
//6. Overhaul UI
    // Visual cue for whose turn it is