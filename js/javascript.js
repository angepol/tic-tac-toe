$(document).ready(function() {
   // These are my Global Variables
   let playerOne = 0;
   let playerTwo = 0;
   let moves = [];
   let currentPlayer = "X";
   let markButton = 0;
   // This is my Change Player function
   function changePlayer() {

      if (currentPlayer === "X") {

         currentPlayer = "0";
      } else {
         currentPlayer = "X";
      }
      return;
   }

   const buttonRefresh = function() {
      $('.button').off("click");
      currentPlayer = "X";
      $('.button').click(function(e) {

         $(e.target).text(currentPlayer);
         markButton = (markButton + 1);

         checkForWin(e.target);
         changePlayer();

      });
   }

   function checkForWin(element) {

      const buttonNumber = Number($(element).data('button-index'));


      moves[buttonNumber] = currentPlayer;


      if (moves[0] === "X" && moves[1] === "X" && moves[2] === "X") {
         playerOne = playerOne + 1
         $('.game--result').text("Player one has won!");
         $('.playerOne').text(`Player One: ${playerOne}`);


      } else if (moves[0] === "0" && moves[1] === "0" && moves[2] === "0") {
         playerTwo = playerTwo + 1
         $('.game--result').text("Player two has won!");
         $('.playerTwo').text(`Player Two: ${playerTwo}`);

      } else if (moves[3] === "X" && moves[4] === "X" && moves[5] === "X") {
         playerOne = playerOne + 1
         $('.game--result').text("Player one has won!");
         $('.playerOne').text(`Player One: ${playerOne}`);

      } else if (moves[3] === "0" && moves[4] === "0" && moves[5] === "0") {
         playerTwo = playerTwo + 1
         $('.game--result').text("Player two has won!");
         $('.playerTwo').text(`Player Two: ${playerTwo}`);

      } else if (moves[6] === "X" && moves[7] === "X" && moves[8] === "X") {
         playerOne = playerOne + 1
         $('.game--result').text("Player one has won!");
         $('.playerOne').text(`Player One: ${playerOne}`);

      } else if (moves[6] === "0" && moves[7] === "0" && moves[8] === "0") {
         playerTwo = playerTwo + 1
         $('.game--result').text("Player two has won!");
         $('.playerTwo').text(`Player Two: ${playerTwo}`);

      } else if (moves[0] === "X" && moves[3] === "X" && moves[6] === "X") {
         playerOne = playerOne + 1
         $('.game--result').text("Player one has won!");
         $('.playerOne').text(`Player One: ${playerOne}`);

      } else if (moves[0] === "0" && moves[3] === "0" && moves[6] === "0") {
         playerTwo = playerTwo + 1
         $('.game--result').text("Player two has won!");
         $('.playerTwo').text(`Player Two: ${playerTwo}`);

      } else if (moves[1] === "X" && moves[4] === "X" && moves[7] === "X") {
         playerOne = playerOne + 1
         $('.game--result').text("Player one has won!");
         $('.playerOne').text(`Player One: ${playerOne}`);

      } else if (moves[1] === "0" && moves[4] === "0" && moves[7] === "0") {
         playerTwo = playerTwo + 1
         $('.game--result').text("Player two has won!");
         $('.playerTwo').text(`Player Two: ${playerTwo}`);

      } else if (moves[2] === "X" && moves[5] === "X" && moves[8] === "X") {
         playerOne = playerOne + 1
         $('.game--result').text("Player one has won!");
         $('element').text(`Player One: ${playerOne}`);

      } else if (moves[2] === "0" && moves[5] === "0" && moves[8] === "0") {
         playerTwo = playerTwo + 1
         $('.game--result').text("Player two has won!");
         $('.playerTwo').text(`Player Two: ${playerTwo}`);

      } else if (moves[0] === "X" && moves[4] === "X" && moves[8] === "X") {
         playerOne = playerOne + 1
         $('.game--result').text("Player one has won!");
         $('.playerOne').text(`Player One: ${playerOne}`);

      } else if (moves[0] === "0" && moves[4] === "0" && moves[8] === "0") {
         playerTwo = playerTwo + 1
         $('.game--result').text("Player two has won!");
         $('.playerTwo').text(`Player Two: ${playerTwo}`);

      } else if (moves[6] === "X" && moves[4] === "X" && moves[2] === "X") {
         playerOne = playerOne + 1
         $('.game--result').text("Player one has won!");
         $('.playerOne').text(`Player One: ${playerOne}`);

      } else if (moves[6] === "0" && moves[4] === "0" && moves[2] === "0") {
         playerTwo = playerTwo + 1
         $('.game--result').text("Player two has won!");
         $('.playerTwo').text(`Player Two: ${playerTwo}`);

      } else if (markButton === 9) {
         $('.game--result').text("cat's game! MEOW!");
      }

      if ($(".game--result").text().includes("Player one has won!" || "Player two has won!" || "cat's game! MEOW!")) {
         $('.button').off("click");

      }

   };

   $('#restart').on('click', function() {
      buttonRefresh();
      markButton = 0;
      moves = [];

      $('.button').html("");
      $('.game--result').html("");

      currentPlayer = "X"
   })

   buttonRefresh();

});
