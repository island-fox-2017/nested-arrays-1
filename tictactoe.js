function tic_tac_toe_board () {
  // ...
  board = [];
  var countX = 0;
  var countO = 0;
  for (i=0; i<3; i++) {
    board.push([]);
    for (j=0; j<3; j++) {
      var numRandom = Math.floor(Math.random() * 2) + 1
      if (numRandom === 1) {
        if(countX < 5) {
          board[i].push('X');
          countX++;
        }
        else {
          board[i].push('O');
        }
      }
      else {
        if (countO < 5) {
          board[i].push('O');
          countO++;
        }
        else {
          board[i].push('X');
        }

      }
    }
  }
  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
