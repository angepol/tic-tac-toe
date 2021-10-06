$(document).ready(function() {

let currentPlayer = "X";
    function changePlayer() {
        if( currentPlayer  === "X" )
            currentPlayer = "O";
        else
            currentPlayer = "X";
    }

$('.game--board').click(function(e) {
  console.log('clicked');
$(e.target).text(currentPlayer);
changePlayer();
checkForWin(e.target);
  });



function checkForWin(element){
console.log($(element).data('button-index'));
const cellNumbers = Number($(element).data('button-index'));
console.log(cellNumbers);

}
const wins = [

[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[6, 4, 2]

]


// for() iterate through the different arrays
// if





// once all 9 cels are filled, disable cells.

// and call some function to evaluate the board
//program checking for winning combinations in the array.
//

//

//write instructions in HTML
// Start a game!

// $('.restart').on('click', function () {
// });
});
// $('.instructions').click(function () {
//     alert(instructions);
// });
//






        //     const player1 = true;
        //     const player2 = true;
        //   const O = '0';
        //   const X = 'X';
        //
        //     function resetP1() {
        //         player1 = true;
        //     }
        //
        //     function resetP2() {
        //         player2 = true;
        //     }
        //
        //     $(".button").click(function() {
        //         var value = $(this).attr('value');
        //         $(this).hide();
        //
        //         if(player1) {
        //             $(this).html(X);
        //             player1 = false;
        //             resetP2();
        //         } else {
        //             $(this).html(O);
        //             player2 = false;
        //             resetP1();
        //         }
        //
        //     });
        // });
        //


        // Switch turns between X and O (or whichever markers you select)
        // Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
