'use strict'

const makeChessboard = () => {
  let chessboard = []
  let bidak = ['Benteng', 'Kuda', 'Peluncur', 'Raja', 'Perdana Menteri', 'Peluncur', 'Kuda', 'Benteng'];

  for (let i=0; i<8; i++) {
    chessboard.push([]);
    for (let j=0; j<bidak.length; j++) {
      if (i == 0) {
        chessboard[i].push(bidak[j]+' Hitam');
      }
      else if (i==1) {
        chessboard[i].push('Pion Hitam');
      }
      else if (i>=2 && i<=5) {
        chessboard[i].push(' ');
      }
      else if (i==6) {
        chessboard[i].push('Pion Putih');
      }
      else if (i==7) {
        chessboard[i].push(bidak[j]+' Putih');
      }
    }
  }
  // ... write your code here
  return chessboard
}

const printBoard = chessboard => {
  // ... write your code here
  for (let i=0; i<8; i++)
    console.log(chessboard[i].join(' | '));
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
