'use strict'

const makeChessboard = () => {
  let chessboard = [];
  let barisPutih = ['Benteng Putih','kuda Putih','Menteri Putih','Raja Putih','Ratu Putih','Pasukan Putih'];
  let barisHitam = ['Benteng Hitam','kuda Hitam','Menteri Hitam','Raja Hitam','Ratu Hitam','Pasukan Hitam'];
  for (var baris = 0; baris < 8; baris++) {
    chessboard.push([]);
    for (var kolom = 0; kolom < 8; kolom++) {
      if ((baris == 0 && kolom == 0) || (baris == 0 && kolom == 7) ) {
        chessboard[baris].push(barisPutih[0])
      } else if ((baris == 0 && kolom == 1) || (baris == 0 && kolom == 6)) {
        chessboard[baris].push(barisPutih[1])
      } else if ((baris == 0 && kolom == 2) || (baris == 0 && kolom == 5)) {
        chessboard[baris].push(barisPutih[2])
      } else if (baris == 0 && kolom == 3) {
        chessboard[baris].push(barisPutih[3])
      } else if (baris == 0 && kolom == 4) {
        chessboard[baris].push(barisPutih[4])
      } else if ((baris == 7 && kolom == 0) || (baris == 7 && kolom == 7) ) {
        chessboard[baris].push(barisHitam[0])
      } else if ((baris == 7 && kolom == 1) || (baris == 7 && kolom == 6)) {
        chessboard[baris].push(barisHitam[1])
      } else if ((baris == 7 && kolom == 2) || (baris == 7 && kolom == 5)) {
        chessboard[baris].push(barisHitam[2])
      } else if (baris == 7 && kolom == 3) {
        chessboard[baris].push(barisHitam[3])
      } else if (baris == 7 && kolom == 4) {
        chessboard[baris].push(barisHitam[4])
      } else if(baris == 1) {
        chessboard[baris].push(barisPutih[5])
      } else if(baris == 6) {
        chessboard[baris].push(barisHitam[5])
      } else {
        chessboard[baris].push('#');
      }
    }
  }
  return chessboard
}

const printBoard = x => {
  for (var i = 0; i < x.length; i++) {
      console.log(String(x[i].join(' | ')));
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
