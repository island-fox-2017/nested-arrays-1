'use strict'

const makeChessboard = () => {
  let chessboard = [];
  let pejabat = ['Benteng','Kuda','Menteri','Raja','Ratu','Menteri', 'Kuda', 'Benteng'];
  let pasukan = ['Pasukan'];
  for (var baris = 0; baris < 8; baris++) {
    chessboard.push([]);
    for (var kolom = 0; kolom < 8; kolom++) {
      if (baris == 0) {
        chessboard[baris].push(`${pejabat[kolom]} Putih`);
      } else if (baris == 1) {
        chessboard[baris].push(`${pasukan[0]} Putih`);
      } else if (baris == 6) {
        chessboard[baris].push(`${pasukan[0]} Hitam`);
      } else if (baris == 7) {
        chessboard[baris].push(`${pejabat[kolom]} Hitam`)
      } else {
        chessboard[baris].push('#')
      }
    }
  }
  return chessboard
}

const printBoard = x => {
  for (var i = 0; i < x.length; i++) {
      console.log(String(x[i].join(' || ')));
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
