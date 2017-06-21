'use strict'

const makeChessboard = () => {
  let chessboard = []
  let kerajaanHitam = ["Benteng Hitam","Kuda Hitam", "Gajah Hitam","Mentri Hitam","Raja Hitam","Gajah Hitam","Kuda Hitam", "Benteng Hitam"]
  let pionHitam =["Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam"]

  let kerajaanPutih = ["Benteng Putih","Kuda Putih", "Gajah Putih","Mentri Putih","Raja Putih","Gajah Putih","Kuda Putih", "Benteng Putih"]
  let pionPutih =["Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih"]


  for (let i = 0; i < 8; i++) {
    if (i==0) {
      chessboard.push(kerajaanHitam)
    }else if (i==1) {
      chessboard.push(pionHitam)
    }else if (i==6) {
      chessboard.push(pionPutih)
    }else if (i==7) {
      chessboard.push(kerajaanPutih)
    } else {
      chessboard.push(["x","x","x","x","x","x","x","x",])
    }
  }
  return chessboard
}
// console.log(makeChessboard());
const printBoard = x => {
  for (var i = 0; i < 8; i++) {
    console.log(x[i].join(" | "));
  }
}
printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
