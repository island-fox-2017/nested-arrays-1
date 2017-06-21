function tic_tac_toe_board () {
  let board = [];
  let nX = 0;
  let nO = 0;
  let rand = () => Math.floor(Math.random() * 2);  // 0 - 1

  for (var row = 0; row < 3; row++) {
    let line = [];
    for (var col = 0; col < 3; col++) {
      if (rand() === 0) {
        if (nO <= 4) {
          line.push('O');
          nO++;
        } else {
          line.push('X');
        }

      } else {
        if (nX <= 4) {
          line.push('X');
          nX++;
        } else {
          line.push('O')
        }
      }
    }
    board.push(line);
  }

  // return rand();
  return `${board[0].join(' ')}\n${board[1].join(' ')}\n${board[2].join(' ')}`;
} // --- tic-tac-toe

console.log(tic_tac_toe_board()) // => make a random tic tic board
