# Project 0
===========

My first project for GA's Software Engineering Immersive.


Play [ tic-tac-toe](https://angepol.github.io/tic-tac-toe/).



### Introduction - the project's aim


Project 0 involved building a 2 x player tic tac toe.


Some features include;

Rendered game board in the browser
Change player function.
An indication of which player has won or if it's a "cat's game" (draw).
A score card for multiple rounds.

### Technologies;

1.html
2.CSS
3.javascript
4.jQuery libraries



## Scope of functionalities

### Global Variables include;
  That are running throughout the program:

  1. playerOne
  1. playerTwo
  1. moves - (representing the button div's on the game board)
  1. currentPlayer - (representing either "X" or "0")
  1. markButton - (functions as a counter for the buttons clicked, specifically in the "if" statement for "cat's game")

##  Functions;

1. changePlayer - switches player consecutively.
1. checkForWin - Takes the buttonNumber and current player through the if statements to determine if there has be a win for player "X", "0" , else "cat's game" if markButton === 9. If Game result delivers any of the messages indicated in the "if" statements, the buttons are then disabled. ( off.click)

1. buttonRefresh - this function is implemented when the user clicks "New Game" aka (Restart in the html). This resets the markButton back to 0(amount of clicks), and clears the array of moves( buttons clicked on the games), it also changes the current player back to "X".

1. Game Result - message is tied in with the if statements.

1. The score card for playerOne and playerTwo are retrieved through the 4th line in each "If" statements.
It displays "Player One" or "Player Two" accordingly, then values of those Variables are added to the game, I have used string interpolation here.



## Background gif

![Moving Clouds] https://giphy.com/gifs/sky-clouds-cloudy-d5PPYjcb3caPTHM3hv


## Project status:

Version 1.0

1. Current working version.

## The next builds will be looking at.
1. Customising the player name to personalise the user experience.

1. Networking multiplayers.

1. Creating an AI opponent for a single user.

## Until then - enjoy! 
