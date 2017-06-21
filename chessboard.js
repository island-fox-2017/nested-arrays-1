'use strict'

const makeChessboard = () => {
  var chessboard = []

  // ... write your code here
  let chessPieces = ['Benteng','Kuda','Menteri','Raja','Ratu','Menteri','Kuda','Benteng'];
  
  // for (let i = 0 ; i <= 8 ; i++)
  
  for (let i = 0 ; i < 8 ; i++){
    if (i === 0 ){
      chessboard.push([]);
      for(let i = 0 ; i < 8 ; i++){
        chessboard[0].push(chessPieces[i]+' hitam')
      }
    } else if (i === 1){
      chessboard.push([])
      for(let i = 0 ; i < 8 ; i++){
        chessboard[1].push('Pion Hitam')
      }
    } else if (i === 6){
      chessboard.push([])
      for(let i = 0 ; i < 8 ; i++){
        chessboard[6].push('Pion Putih')
      }
    } else if (i === 7){
      chessboard.push([])
      for(let i = 0 ; i < 8 ; i++){
        chessboard[7].push(chessPieces[i] + ' putih')
      }
    }else {
      chessboard.push(['0','0','0','0','0','0','0','0'])
      }
    }


// console.log(chessboard);
  return chessboard
}

const printBoard = x => {
  // ... write your code here
  for (let i = 0 ; i < 8 ; i++){
    console.log(x[i].join(`|`));
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
