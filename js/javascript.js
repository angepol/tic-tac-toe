$(document).ready(function() {

// These are my Global Variables
const wins = [

[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[6, 4, 2]

];
const moves = [];
let currentPlayer = "X";

// This is my Change Player function
    function changePlayer() {
        if( currentPlayer  === "X" )
            currentPlayer = "0";
        else
            currentPlayer = "X";
    }

$('.game--board').click(function(e) {
  // console.log('clicked');
$(e.target).text(currentPlayer);
checkForWin(e.target);
changePlayer();
  });

function checkForWin(element) {
console.log($(element).data('button-index'));
const buttonNumber = Number($(element).data('button-index'));
console.log(buttonNumber);

moves[buttonNumber] = currentPlayer;
console.log(moves[0]);

if(moves[0]==="X"&&moves[1]==="X"&&moves[2]==="X"||moves[0]==="0"&&moves[1]==="0"&&moves[2]==="0") {
  console.log('win!');
}else if
(moves[3]==="X"&&moves[4]==="X"&&moves[5]==="X"||moves[3]==="0"&&moves[4]==="0"&&moves[5]==="0") {
  console.log('win!');
}else if
(moves[6]==="X"&&moves[7]==="X"&&moves[8]==="X"||moves[6]==="0"&&moves[7]==="0"&&moves[8]==="0") {
  console.log('win!');
}else if
(moves[0]==="X"&&moves[3]==="X"&&moves[6]==="X"||moves[0]==="0"&&moves[3]==="0"&&moves[6]==="0") {
  console.log('win!');
}else if
(moves[1]==="X"&&moves[4]==="X"&&moves[7]==="X"||moves[1]==="0"&&moves[4]==="0"&&moves[7]==="0") {
  console.log('win!');
}else if
(moves[2]==="X"&&moves[5]==="X"&&moves[8]==="X"||moves[2]==="0"&&moves[5]==="0"&&moves[8]==="0") {
  console.log('win!');
}else if
(moves[0]==="X"&&moves[4]==="X"&&moves[8]==="X"||moves[0]==="0"&&moves[4]==="0"&&moves[8]==="0") {
  console.log('win!');
}else if
(moves[6]==="X"&&moves[4]==="X"&&moves[2]==="X"||moves[6]==="0"&&moves[4]==="0"&&moves[2]==="0") {
  console.log('win!');
} else {
  console.log("cat's game! MEOW!");
}





// NEXT STEPS
//CREATE A SCORE CARD
//increment the score by 1
//diasble board - when the condition is met then disable board.
// function call the disable board funtion after each each round.( each else if statement)

//player score variable...
// on click new game
// $('.instructions').click(function () {
//     alert(instructions);
// });
//


};

$('#restart').click( function() {
  console.log('click');
  $('.button').text("");
$('.game--status').text("");

})




});
