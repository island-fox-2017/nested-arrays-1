'use strict'

const makeChessboard = () => {
  
  // ... write your code here
  let chessMan = ['Benteng', 'Kuda', 'Gajah', 'Ratu', 'Raja', 'Menteri', 'Kuda', 'Benteng'],
    color = ['Black', 'White'],
    pion = ['Pion'],
    chessboard = [],
    board = [],
    row,
    col;
    
    for(row=0; row<8; row++){
      for(col=0; col<8; col++){
        if(row == 0){
          chessboard.push(chessMan[col] + ' ' + color[0])
        }else if(row == 1){
          chessboard.push(pion[0] + ' ' + color[0])
        }else if(row == 6){
          chessboard.push(pion[0] + ' ' + color[1])
        }else if(row == 7){
          chessboard.push(chessMan[col] + ' ' + color[1])
        }else {
          chessboard.push(' ')
        }
      }
    }

  let i,j, square=8;
  for(i=0, j=chessboard.length; i<j; i+=square){
    // console.log(i);
    // console.log(j);
    board.push(chessboard.slice(i,i+square))
    // console.log(chessboard.slice(i,i+square));
  }
    return board
}

const printBoard = x => {
  // ... write your code here
  for(let k=0; k<8; k++){
    x[k] = x[k].join(' | ')
  }
  return x
}

console.log(printBoard(makeChessboard()))

module.exports = {
  makeChessboard,
  printBoard
}
