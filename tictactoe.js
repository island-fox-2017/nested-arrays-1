function tic_tac_toe_board () {
  // ...
  let board = [];
  let countX = 0;
  let countO = 0;

  for(let i = 0; i < 3; i++)
  {
    let baris = [];
    for(let j = 0; j < 3; j++)
    {
      let random = Math.floor(Math.random() * 2);
      if(random == 1 && countX < 5 || countO >= 5)
      {
        baris.push('x');
        countX++;
      }
      else
      {
        baris.push('o');
        countO++;
      }
    }
    board.push(baris);
  }

  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
