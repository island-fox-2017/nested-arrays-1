'use strict'

const makeChessboard = () => {
  let chessboard = [];
  let arr = ["benteng","kuda","berkas","raja","ratu","berkas","kuda","benteng"];
  let pion = ["pion"];

  //console.log(chessboard[0]);

    for(let i=0; i<arr.length;i++){   //for pertama di gunakan untuk menuliskan array di dalamm chessboard agar 2D
      chessboard.push([]);            // memasukan array ke dalam arr chessboard sebanyak 8 kali
        for(let j=0;j<arr.length;j++){
           if(i == 0){                     // ketika i = 0 yaitu cheeseboard dengan index 0 maka di lakukan perulangan sebanyak panjang arr
              chessboard[i].push(arr[j] + " hitam"); // perulangan nya dalah memasukan nilai arr ke j kedalam cheeseboard[i][j] dengan ambahan string hitam
           } else if(i == 1){               // ketika i = 1 yaitu chesseboard dengan index 1 maka di lakukan perulangan
              chessboard[i].push(pion + " hitam"); // perulangan nya adalah push pion di tambah string "hitam" sepanjang arr.length
           } else if(i == 6){
              chessboard[i].push(pion + " putih");
           } else if(i == 7){
              chessboard[i].push(arr[j] + " putih");
           } else {
              chessboard[i].push("");
           }
        }
    }
// console.log(chessboard)
// console.log(chessboard[7][0] == "benteng putih")
  // ... write your code here
  return chessboard
}

const printBoard = x => {
  // ... write your code here
  for(let i=0;i<8;i++){
    console.log(x[i].join(" | "));
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
