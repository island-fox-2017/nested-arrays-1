'use strict'

const makeChessboard = () => {
  // --- board ---
  let grid = (size => {
    let line = [];
    for (var x = 0; x < size; x++) {
      line.push([]);
      for (var y = 0; y < size; y++) {
        if((x + y) % 2 === 0) {
          line[x].push('■');
        } else {
          line[x].push('□');
        }
      }
    }
    return line;
  });

  let chessboard = grid(8)

  // --- pieces ---
  const blackPieces = [['♟'],['♜', '♞', '♝', '♚', '♛', '♝', '♞', '♜']];
  const whitePieces = [['♙'],['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']];

  // --- placing ---
  for (var row = 0; row < 8; row++) {
    for (var col = 0; col < 8; col++) {
      if (row === 0) chessboard[row][col] = `${blackPieces[1][col]}`;
      if (row === 1) chessboard[row][col] = `${blackPieces[0]}`;
      if (row === 6) chessboard[row][col] = `${whitePieces[0]}`;
      if (row === 7) chessboard[row][col] = `${whitePieces[1][col]}`;
    }
  }

  return chessboard
}

// console.log(makeChessboard());

const printBoard = x => {
  let display = [];
  for (var i = 0; i <= x.length - 1; i++) display.push(x[i].join(' '))

  return console.log(display.join('\n'));
}

printBoard(makeChessboard());

module.exports = {
  makeChessboard,
  printBoard
}

// /*
// white chess king	   ♔	U+2654
// white chess queen	 ♕	U+2655
// white chess rook	   ♖	U+2656
// white chess bishop	 ♗	U+2657
// white chess knight	 ♘	U+2658
// white chess pawn	   ♙	U+2659
//
// black chess king	   ♚	U+265A
// black chess queen	 ♛	U+265B
// black chess rook	   ♜	U+265C
// black chess bishop	 ♝	U+265D
// black chess knight	 ♞	U+265E
// black chess pawn	   ♟	U+265F
// */
