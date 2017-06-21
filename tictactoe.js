function tic_tac_toe_board() {
  // ...
  let tictactoe = [];
  let hurufX = 'X';
  let hurufO = 'O';
  let jumlahX = 0;
  let jumlahO = 0;

  for (let i = 0; i < 3; i++) {
    tictactoe.push([]);
    for (let j = 0; j < 3; j++) {
      let random = Math.floor(Math.random() * 2) + 1;
      if (jumlahO == 5) {
        tictactoe[i].push(hurufX);
      } else if (jumlahX == 5) {
        tictactoe[i].push(hurufO)
      } else {
        if (random == 1) {
          tictactoe[i].push(hurufX);
          jumlahX++;
        } else {
          tictactoe[i].push(hurufO);
          jumlahO++;
        }
      }
    }
  }

  return tictactoe;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
