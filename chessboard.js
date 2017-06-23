'use strict'

const makeChessboard = () => {
  // ... write your code here
  let baris8 = [];
  let baris1 = [];
  let baris7 = [];
  let baris2 = [];
  let baris3456 = [ , , , , , , , , ];
  let result = [];

  for (let i = 0; i < 8; i++) {
    if (i === 0 || i === 7) {
      baris8[i] = 'Benteng Hitam';
      baris1[i] = 'Benteng Putih';
    } else if (i === 1 || i === 6) {
      baris8[i] = 'Kuda Hitam';
      baris1[i] = 'Kuda Putih';
    } else if (i === 2 || i === 5) {
      baris8[i] = 'Peluncur Hitam';
      baris1[i] = 'Peluncur Putih';
    } else if (i === 3) {
      baris8[i] = 'Ratu Hitam';
      baris1[i] = 'Ratu Putih';
    } else if (i === 4) {
      baris8[i] = 'Raja Hitam';
      baris1[i] = 'Raja Putih';
    }
    baris7[i] = 'Prajurit Hitam';
    baris2[i] = 'Prajurit Putih';
  }
  
  for (let i = 0; i < 8; i++) {
    if (i === 0) {
      result.push(baris8)
    } else if (i === 1) {
      result.push(baris7)
    } else if (i === 6) {
      result.push(baris2)
    } else if (i === 7) {
      result.push(baris1)
    } else {
      result.push(baris3456)
    }
  }
  return result;
}

console.log(makeChessboard());

const printBoard = x => {
  // ... write your code here
  for (let i = 0; i < x.length ; i++) {
    console.log(x[i].join());
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
