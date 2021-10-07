$(document).ready(function() {
   // These are my Global Variables
   // const wins = [
   //
   //    [0, 1, 2],
   //    [3, 4, 5],
   //    [6, 7, 8],
   //    [0, 3, 6],
   //    [1, 4, 7],
   //    [2, 5, 8],
   //    [0, 4, 8],
   //    [6, 4, 2]
   //
   // ];
   const moves = [];
   let currentPlayer = "X";
   let markButton = 0
   // This is my Change Player function
   function changePlayer() {
      if (currentPlayer === "X") {
         currentPlayer = "0";
      } else {
         currentPlayer = "X";
      }
      return;
   }

   $('.button').click(function(e) {
      console.log('clicked');
      // if ($('.button').html()!= ""){
      //   return;
      // }
      $(e.target).text(currentPlayer);
      markButton = (markButton + 1);
      console.log(markButton);
      checkForWin(e.target);
      changePlayer();
      // if ($('.button').html() != "") {
      //    return;
      // }

   });


   function checkForWin(element) {
      console.log($(element).data('button-index'));
      const buttonNumber = Number($(element).data('button-index'));
      console.log(buttonNumber);


      moves[buttonNumber] = currentPlayer;
      console.log(moves[0]);

      if (moves[0] === "X" && moves[1] === "X" && moves[2] === "X" || moves[0] === "0" && moves[1] === "0" && moves[2] === "0") {
         $('.game--result').text("Winner!");

      } else if (moves[3] === "X" && moves[4] === "X" && moves[5] === "X" || moves[3] === "0" && moves[4] === "0" && moves[5] === "0") {
         $('.game--result').text("Winner!");

      } else if (moves[6] === "X" && moves[7] === "X" && moves[8] === "X" || moves[6] === "0" && moves[7] === "0" && moves[8] === "0") {
         $('.game--result').text("Winner!");

      } else if (moves[0] === "X" && moves[3] === "X" && moves[6] === "X" || moves[0] === "0" && moves[3] === "0" && moves[6] === "0") {
         $('.game--result').text("Winner!");

      } else if (moves[1] === "X" && moves[4] === "X" && moves[7] === "X" || moves[1] === "0" && moves[4] === "0" && moves[7] === "0") {
         $('.game--result').text("Winner!");

      } else if (moves[2] === "X" && moves[5] === "X" && moves[8] === "X" || moves[2] === "0" && moves[5] === "0" && moves[8] === "0") {
         $('.game--result').text("Winner!");

      } else if (moves[0] === "X" && moves[4] === "X" && moves[8] === "X" || moves[0] === "0" && moves[4] === "0" && moves[8] === "0") {
         $('.game--result').text("Winner!");

      } else if (moves[6] === "X" && moves[4] === "X" && moves[2] === "X" || moves[6] === "0" && moves[4] === "0" && moves[2] === "0") {
         $('.game--result').text("Winner!");
      } else if (markButton === 9) {
         $('.game--result').text("cat's game! MEOW!");
      }

      if ($(".game--result").text().includes("Winner"||"cat's game! MEOW!")) {
      $('.button').off("click");
      $('.game--board').off("click");
      }


   };

   $('#restart').click(function() {
      window.location.reload()
      // console.log('click');
      // $('.button').text("");
      // $('.game--result').text("");

      // $('.button').on("click");
      // $('.game--board').on("click");
      // changePlayer ();
   })


   //doc ready close out
});
