# _Pig Dice_

#### _A web-page version of the classic game Pig Dice, June 18, 2020_

#### By _**Ian Scott, Nikolas Kososik**_

## Description

_This is a web application that allows two players to play the classic game Pig Dice. THe program simulates taking turns rolling dice, and gives the players the option of "Holding" onto their score, and adding it to their total, or risking their current round total for more points. Holding ends a players turn, adding to their total score, while rolling a "1" immediately ends a players turn, and they gain nothing._

## Setup/Installation Requirements

_Open by downloading:_
1. Download this repository onto your computer by clicking the "clone or download button"
2. Double click index.html within your file explorer or GUI to open it in your web browser

_Open via Bash/GitBash;_
1. Clone this repository onto your computer: https://github.com/Scott-Ian/Pig-Dice.git
2. Navigate into the "Pig-Dice" directory in Visual Studio Code, or your preferred text editor
3. Enter the command line prompt "code ." or your text editor's equivalent
4. Open index.html in Chrome or your preferred browser: "open index.html" or other equivalent

## Known Bugs

_Players can click through "Hold" and "Roll" before animations presenting that a turn is over have been completed. This can lead to players not seeing that their turn is over, and clicking for their opponent._

## Support and contact details

_If you have any questions, run into any issues or bugs, or if you would like to contribute to this project, please contact either author through Github._

## Specifications

|  | Behavior | Input | Output | isComplete |
|----|----|----|----|----|
|1.| Program will generate a random number from 1-6 and store the value in a Dice Object| click "roll dice" button | 3 | _True_|
|2.| Program wil add value of consecutive dice rolls into a player object variable of tempScore| 3, 6, 9| 18| _False_|
|3.| Selecting Hold will add the tempScore variable to the player currentScore variable. | "Hold" click | Score: 22| _True_|
|4.| Program will evaluate if a "1" was rolled| NA| N/A| _True_|
|5.| Program will prompt next player after a 1 is rolled| N/A| N/A| _True_|
|6.| Program will not allow a player to roll if it is not their turn, measured by a isTurn variable in the player object| "Roll" click| Not your turn| _True_|
|7.| Program will assess whether a player's score is 100 or more, and then prompt winning event| "Hold" click| You've Won!| _True_|
|8.| The program contains a reset/new Game button which will restart the program from initial state| "New Game" click| N/A| _True_|

## Technologies Used

_This project utilizes HTML, CSS, Bootstrap v.3.3.7, jQuery, as well as Animate.css.  This project further utilizes inputs, logical branching, custom objects and prototype, as well as advanced object and objecty key-value manipulations._

### License

Copyright (c) 2020 **_Ian Scott, Nikolas Kososik._** This web project is licensed under the MIT license.