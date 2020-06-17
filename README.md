# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Specifications

|  | Behavior | Input | Output | isComplete |
|----|----|----|----|----|
|1.| Program will generate a random number from 1-6 and store the value in a Dice Object| click "roll dice" button | 3 | _False_|
|2.| Program wil add value of consecutive dice rolls into a player object variable of tempScore| 3, 6, 9| 18| _False_|
|3.| Selecting Hold will add the tempScore variable to the player currentScore variable. | "Hold" click | Score: 22| _False_|
|4.| Program will evaluate if a "1" was rolled| NA| N/A| _False_|
|5.| Program will prompt next player after a 1 is rolled| N/A| N/A| _False_|
|6.| Program will not allow a player to roll if it is not their turn, measured by a isTurn variable in the player object| "Roll" click| Not your turn| _False_|
|7.| Program will assess whether a player's score is 100 or more, and then prompt winning event| "Hold" click| You've Won!| _False_|
|8.| The program contains a reset/new Game button which will restart the program from initial state| "New Game" click| N/A| _False_|
|9.| Sample Behavior| Input| OUtput| _False_|

1. Play is clicked:
  Display the play space

2. Objects needed:
  1. Game Object
    * 
  2. Player Object
    * isTurn
    * current Score
    * past rolls -optional
  3. Dice Object
    * Min-max numbers on dice
    * Random roll method
    * current roll

3. Needed functions
  * Round incrementor
  * Random Dice Roller
  * Check win state function
  * Check for loose state function (rolled a 1?)
  * Add  round total to score
  * New Game Function
  * Move to next player function

4. User input data collection and display...
  * Butons to hold, roll, new game
  * Display: 
    * Two columns for each player: 2 distinct play spaces each with own buttons, scores etc. 
    * Possibly maintain middle column for user prompts, animations etc. 





|1.| Sample Behavior| Input| OUtput| _False_|

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

https://choosealicense.com/
https://en.wikipedia.org/wiki/MIT_License
https://en.wikipedia.org/wiki/GNU_General_Public_License

Copyright (c) 2016 **_{List of contributors or company name}_**