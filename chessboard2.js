'use strict'

const makeChessboard = () => {

  // ... write your code here
  let chessPutih = ['Benteng Putih', 'Kuda Putih', 'Gajah Putih', 'Ratu Putih', 'Raja Putih', 'Menteri Putih', 'Kuda Putih', 'Benteng Putih'],

    chessHitam = ['Benteng Hitam', 'Kuda Hitam', 'Gajah Hitam', 'Ratu Hitam', 'Raja Hitam', 'Menteri Hitam', 'Kuda Hitam', 'Benteng Hitam'],

    chessboard = [];


  for (let col = 0; col < 8; col++) {
    if (col == 0) {
      chessboard.push(chessPutih)

    } else if (col == 1) {
      let arrPionPutih = []
      for (let i = 0; i < 8; i++) {
        arrPionPutih.push('Pion Putih')
      }
      chessboard.push(arrPionPutih)

    } else if (col == 6) {
      let arrPionHitam = []
      for (let i = 0; i < 8; i++) {
        arrPionHitam.push('Pion Hitam')
      }
      chessboard.push(arrPionHitam)

    } else if (col == 7) {
      chessboard.push(chessHitam)

    } else {
      let empty = []
        for(let i = 0; i < 8; i++){
          empty.push('--- && ---')
        }
          chessboard.push(empty)
    }
  }

  return chessboard;

}

const printBoard = pb => {
  // ... write your code here
  for (let i = 0; i < 8; i++) {
    console.log(pb[i].join(" | "));
  }
}

printBoard(makeChessboard());


module.exports = {
  makeChessboard,
  printBoard
}
