'use strict'

const makeChessboard = () => {
  let chessboard = []
  let prajurit= ['Benteng', 'Kuda', 'Gajah', 'Raja', 'Ratu', 'Gajah', 'Kuda', 'Benteng'];
  let colors= ['Hitam', 'Putih'];

for (let i= 0; i<prajurit.length; i++) {
  chessboard.push([]);
  for (let j= 0; j<prajurit.length; j ++ ){
    if (i === 0 ) {
      chessboard[i].push(prajurit[j]+' '+colors[0])
    }
    else if (i == 7) {
      chessboard[i].push(prajurit[j]+' '+colors[1])
    }
    else if (i==1) {
      chessboard[i].push('Pion '+ colors[0])
    }
    else if (i==6) {
      chessboard[i].push('Pion '+colors[1])
    }
    else {
      chessboard[i].push('          ')
    }
  }
}
  // ... write your code here
  return chessboard
}

const printBoard = x => {
  for (let i= 0; i<8; i++) {
    x[i]= x[i].join('|')
  }
  // ... write your code here
  console.log(x);
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
