'use strict'

const makeChessboard = () => {
  let chessboard = [];
  let tempChessboard = [];

  // ... write your code here
  let kerajaan = ['Benteng', 'Kuda', 'Peluncur', 'Menteri', 'Raja', 'Peluncur', 'Kuda', 'Benteng'];
  let troops = ['Pion'];
  let warna  = ['Hitam', 'Putih'];
  
  //Symbol 
  let kerajaanHitam = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];
  let troopsHitam = ['♟'];
  let kerajaanPutih = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'];
  let troopsPutih = ['♙'];
  
  //looping kerajaan Hitam
  for (let i=0; i<kerajaan.length; i++) {
    // tempChessboard.push(`${kerajaan[i]} ${warna[0]}`);
    tempChessboard.push(`${kerajaanHitam[i]}`);
  }
  
  //looping troops Hitam
  for (let i=0; i<kerajaan.length; i++) {
    // tempChessboard.push(`${troops} ${warna[0]}`);
    tempChessboard.push(`${troopsHitam}`);
  }
  
  //looping kosongan
  for (let i=0; i<32; i++) {
    tempChessboard.push(`_`);
  }
  
  //looping troops Putih
  for (let i=0; i<kerajaan.length; i++) {
    // tempChessboard.push(`${troops} ${warna[1]}`);
    tempChessboard.push(`${troopsPutih}`);
  }
  
  //looping kerajaan Putih
  for (let i=0; i<kerajaan.length; i++) {
    // tempChessboard.push(`${kerajaan[i]} ${warna[1]}`);
    tempChessboard.push(`${kerajaanPutih[i]}`);
  }
  
  let jarak = 8;
 //looping final
 for (let f = 0; f < tempChessboard.length; f += jarak) {
   chessboard.push(tempChessboard.slice(f, f + jarak));
 }
  
  return chessboard
  // return tempChessboard;
}

// console.log(makeChessboard());

const printBoard = x => {
  // ... write your code here
  for (var i = 0; i < x.length; i++) {
    console.log(x[i].join(' ⎟ '));
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
