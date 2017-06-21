'use strict'

const makeChessboard = () => {
  let board = [];
  let hitam = ["Benteng Hitam", "Kuda Hitam", "Peluncur Hitam", "Raja Hitam", "Ratu Hitam", "Peluncur Hitam", "Kuda Hitam", "Benteng Hitam",];
  let putih = ["Benteng Putih", "Kuda Putih", "Peluncur Putih", "Raja Putih", "Ratu Putih", "Peluncur Putih", "Kuda Putih", "Benteng Putih",];
  let hitamPion = ["pion hitam"];
  let putihPion = ["pion putih"];

  for (let i = 0; i < 8; i++) {
    if (i === 0)
      board.push(hitam);
    else if (i === 7)
      board.push(putih);
    else if(i === 1) {
      for (let j = 0; j < 8; j++) {
        hitamPion.push("pion hitam");
      }
      board.push(hitamPion);
    }
    else if(i === 6){
      for (let j = 0; j < 8; j++) {
        putihPion.push("pion putih");
      }
      board.push(putihPion);
    }
    else {
      let kosong = [];
      for (let j = 0; j < 8; j++) {
        kosong.push("z");
      }
      board.push(kosong);
    }
  }
  return board;
}

const printBoard = board => {
  // ... write your code here
  for (let i = 0; i < 8; i++) {
    console.log(board[i].join(" | "));
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
