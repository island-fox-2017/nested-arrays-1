'use strict'

const makeChessboard = () => {
  let chessboard = []
  let bidak = ['benteng', 'kuda', 'peluncur', 'panglima', 'ratu', 'peluncur', 'kuda', 'benteng']

  // ... write your code here
  for (var i=0; i<bidak.length; i++) {
    chessboard.push([])
    for (var j=0; j<bidak.length; j++) {
      if (i == 0) {
        chessboard[i].push(bidak[j]+' hitam')
      }
      else if (i == 1) {
        chessboard[i].push('pion hitam')
      }

      else if (i == 6) {
        chessboard[i].push('pion putih')
      }
      else if (i == 7) {
        chessboard[i].push(bidak[j]+' putih')
      }

      else {
        chessboard[i].push('__________')
      }
    }
  }

  return chessboard
}

const printBoard = x => {
  // ... write your code here
  // console.log(x);
  for (let i=0; i<x.length; i++) {
    console.log(x[i].join(' | '));
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
