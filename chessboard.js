'use strict'

const makeChessboard = () => {
  let chessboard = []
  // ... write your code here
  const blk = ['BR', 'Bk', 'BB', 'BK', 'BQ', 'BB', 'Bk', 'BR']
  const blkp = 'BP'
  const wht = ['WR', 'Wk', 'WB', 'WQ', 'WK', 'WB', 'Wk', 'WR']
  const whtp = 'WP'
  for (var col = 0; col < 8; col++) {
    chessboard.push([])
    if (col === 0) {
      chessboard[0].push(blk[0])
      chessboard[0].push(blk[1])
      chessboard[0].push(blk[2])
      chessboard[0].push(blk[3])
      chessboard[0].push(blk[4])
      chessboard[0].push(blk[5])
      chessboard[0].push(blk[6])
      chessboard[0].push(blk[7])
    } else if (col === 1) {
      for (var i = 0; i < 8; i++) {
        chessboard[1].push(blkp)
      }
    } else if (col === 7) {
      chessboard[7].push(wht[0])
      chessboard[7].push(wht[1])
      chessboard[7].push(wht[2])
      chessboard[7].push(wht[3])
      chessboard[7].push(wht[4])
      chessboard[7].push(wht[5])
      chessboard[7].push(wht[6])
      chessboard[7].push(wht[7])
    } else if (col === 6) {
      for (var i = 0; i < 8; i++) {
        chessboard[6].push(whtp)
      }
    } else {
      for (var i = 0; i < 8; i++) {
        chessboard[col].push('  ')
      }
    }
  }

  return chessboard
}

// console.log(makeChessboard())

const printBoard = chessboard => {
  // ... write your code here
  for (var i = 0; i < 8; i++) {
    console.log(chessboard[i].join(' | '))
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
