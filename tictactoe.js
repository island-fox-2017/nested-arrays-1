function tic_tac_toe_board() {
  // ...
  var board = [];
  var scoreX = '✖︎';
  var scoreO = '◉';
  var countX = 1;
  var countO = 1;

  for (let i = 0; i < 3; i++) {
    board.push([]);
    for (let j = 0; j < 3; j++) {
      //Var Random
      var random = Math.floor(Math.random() * 2);
      //Condition if X or O more than or equal 5
      if (countX >= 5) {
        board[i].push(scoreO);
      }
      else if (countO >= 5) {
        board[i].push(scoreX);
      }
      //Condition if random 0 or 1 then?
      else {
        if (random == 1) {
          board[i].push(scoreX);
          countX++;
        }
        else {
          board[i].push(scoreO);
          countO++;
        }
      }//else
    }//for kedua
  }//for pertama

  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
