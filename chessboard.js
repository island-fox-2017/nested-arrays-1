'use strict'
//pseudocode
//buat variabel per barisnya
//looping per aray untuk push variabel ke dalam var chessboard
//looping lagi untuk membuat papan catur menjadi satu baris dipisahkan dengan |
const makeChessboard = () => {
  let chessboard = [];
  let black = ["Benteng Hitam", "Kuda Hitam", "Gajah Hitam", "Menteri Hitam", "Raja Hitam", "Gajah Hitam", "Kuda Hitam", "Benteng Hitam"];
  let blackpion = ["Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam"];
  let white = ["Benteng Putih", "Kuda Putih", "Gajah Putih", "Menteri Putih", "Raja Putih", "Gajah Putih", "Kuda Putih", "Benteng Putih"];
  let whitepion = ["Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih"];
  let blank = ["          ","          ","          ","          ","          ","          ","          ","          "];

  for(let i=0; i < 1; i++){
    chessboard.push(black, blackpion, blank, blank, blank, blank, whitepion, white );
  }
  return chessboard
}

const printBoard = x => {
  // ... write your code here
  for(let i=0; i<8; i++){
    console.log(x[i].join(" | "));
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
