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
let markCell = 0
// This is my Change Player function
  function changePlayer() {
  if( currentPlayer  === "X" )
    currentPlayer = "0";
  else
    currentPlayer = "X";
    }

$('.game--board').click(function(e) {
  console.log('clicked');
$(e.target).text(currentPlayer);
markCell = (markCell + 1);
console.log(markCell);
checkForWin(e.target);
changePlayer();
  });

function checkForWin(element) {
console.log($(element).data('button-index'));
const buttonNumber = Number($(element).data('button-index'));
console.log(buttonNumber);
// let winner = []

moves[buttonNumber] = currentPlayer;
console.log(moves[0]);

if(moves[0]==="X"&&moves[1]==="X"&&moves[2]==="X"||moves[0]==="0"&&moves[1]==="0"&&moves[2]==="0") {
 $('.game--result').text("Winner!");
// disabled ();
// alert ('win!');

}else if
(moves[3]==="X"&&moves[4]==="X"&&moves[5]==="X"||moves[3]==="0"&&moves[4]==="0"&&moves[5]==="0") {
// $('.button').prop('disabled', true);
$('.game--result').text("Winner!");
// disabled ();
  // console.log('win!');
}else if
(moves[6]==="X"&&moves[7]==="X"&&moves[8]==="X"||moves[6]==="0"&&moves[7]==="0"&&moves[8]==="0") {
// $('.button').prop('disabled', true);
$('.game--result').text("Winner!");
// disabled ();
  // console.log('win!');
}else if
(moves[0]==="X"&&moves[3]==="X"&&moves[6]==="X"||moves[0]==="0"&&moves[3]==="0"&&moves[6]==="0") {
// $('.button').prop('disabled', true);
$('.game--result').text("Winner!");
// disabled ();
// $('.game--result).text("Winner!");
  // console.log('win!');
}else if
(moves[1]==="X"&&moves[4]==="X"&&moves[7]==="X"||moves[1]==="0"&&moves[4]==="0"&&moves[7]==="0") {
// $('.button').prop('disabled', true);
$('.game--result').text("Winner!");
// disabled ();
// $('.game--result).text("Winner!");
  // console.log('win!');
}else if
(moves[2]==="X"&&moves[5]==="X"&&moves[8]==="X"||moves[2]==="0"&&moves[5]==="0"&&moves[8]==="0") {
// $('.button').prop('disabled', true);
$('.game--result').text("Winner!");
// disabled ();
// $('.game--result).text("Winner!");
  // console.log('win!');
}else if
(moves[0]==="X"&&moves[4]==="X"&&moves[8]==="X"||moves[0]==="0"&&moves[4]==="0"&&moves[8]==="0") {
// $('.button').prop('disabled', true);
$('.game--result').text("Winner!");
// disabled ();
// $('.game--result).text("Winner!");
  // console.log('win!');
}else if
(moves[6]==="X"&&moves[4]==="X"&&moves[2]==="X"||moves[6]==="0"&&moves[4]==="0"&&moves[2]==="0") {
// $('.button').prop('disabled', true);
$('.game--result').text("Winner!");
// disabled ();
// $('.game--result).text("Winner!");
  // console.log('win!');
}

 else if (markCell === 9) {
$('.game--result').text("cat's game! MEOW!");
// disabled ();
// $('.game--result).text("cat's game! MEOW!");
  // console.log();
}

 if ($(".game--result").text().includes("Winner"||"cat's game! MEOW!")) {
            $('.button').off("click");
            $('.game--board').off("click");
        }


};

$('#restart').click( function () {
  console.log('click');
  $('.button').text("");
$('.game--result').text("");

$('.button').on("click");
$('.game--board').on("click");
 changePlayer ();
})


//doc ready close out
});

// NEXT STEPS
//score card
//store winner in a variable for the score card.
// if $('.game--board') === "XXX" ||"000"||
//increment the winners'score by 1
 //can I put a boolean function in here too?
//diasble board - when the condition is met then disable board.
// be sure to git commit with each change from now
//add correct indentation
//button for instructions have them in a side pannel....
// $('.instructions').click(function () {
//     alert(instructions);
// });
//
