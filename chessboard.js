'use strict'

const makeChessboard = () => {
  // --- board ---
  let grid = () => {
    let line = [];
    for (var x = 0; x < 8; x++) {
      line.push([])
      for (var y = 0; y < 8; y++) {
        line[x].push('[   ]')
      }
    }
    return line;
  }

  let chessboard = grid();

  // --- pieces ---
  const pieces = [   ['pawn'], ['rook', 'knight', 'bishop', 'king', 'queen', 'bishop', 'knight', 'rook']  ];
  const color = ['black', 'white'];

  // --- placing ---
  for (var row = 0; row < 8; row++) {
    for (var col = 0; col < 8; col++) {
      if (row === 0) chessboard[row][col] = `${color[0]} ${pieces[1][col]}`;
      if (row === 1) chessboard[row][col] = `${color[0]} ${pieces[0]}`;
      if (row === 6) chessboard[row][col] = `${color[1]} ${pieces[0]}`;
      if (row === 7) chessboard[row][col] = `${color[1]} ${pieces[1][col]}`;
    }
  }

  return chessboard
}

// console.log(makeChessboard());

const printBoard = x => {
  let display = [];
  for (var i = 0; i <= x.length - 1; i++) display.push(x[i].join(' | '))
  // console.log(display);

  return console.log(display.join('\n'));
}

printBoard(makeChessboard());

module.exports = {
  makeChessboard,
  printBoard
}
