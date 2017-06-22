'use strict'

const makeChessboard = () => {
  
  // ... write your code here
  let chessMan = ['Benteng', 'Kuda', 'Gajah', 'Ratu', 'Raja', 'Menteri', 'Kuda', 'Benteng'],
    color = ['Hitam', 'Putih'],
    pion = ['Pion'],
    chessboard = [],
    board = []
    
    for(let row=0; row<8; row++){
      
      for(let col=0; col<8; col++){
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
    
    
// console.log(chessboard);
  let row,col, square=8;
  for(row=0, col=chessboard.length; row<col; row+=square){
    board.push(chessboard.slice(row,row+square))
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
