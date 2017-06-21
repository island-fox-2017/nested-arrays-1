'use strict'

const makeChessboard = () => {
  let chessboard = []

  // ... write your code here
  const nameChessWhite = ['Benteng Putih', 'Kuda Putih', 'Peluncur Putih ','Ratu Putih','Raja Putih','Pion Putih' ];
  const nameChessBlack = ['Benteng Hitam', 'Kuda Hitam', 'Peluncur Hitam ','Raja Hitam','Ratu Hitam','Pion Hitam' ];
  for (let baris = 0; baris < 8; baris++) {
    chessboard.push([]);
    let tambah = 0;
    for (let kolom = 0; kolom < 8; kolom++) {

        //baris hitam
        if (baris ==0 && kolom <=4) {
          chessboard[baris].push(nameChessBlack[kolom])
        } else if ( baris == 0 && kolom > 4) {
          chessboard[baris].push(nameChessBlack[tambah]);
          tambah++
        }

        //pion
        else if (baris == 1) {
          chessboard[baris].push(nameChessBlack[5])
        }else if (baris==6 ) {
          chessboard[baris].push(nameChessWhite[5])
        }

        //bidak putih
        else if (baris ==7 && kolom <=4) {
          chessboard[baris].push(nameChessWhite[kolom])
        } else if ( baris == 7 && kolom > 4) {
          chessboard[baris].push(nameChessWhite[tambah]);
          tambah++
        }

        else {
          chessboard[baris].push("=")
        }
    }
  }

  return chessboard
}

//console.log(makeChessboard());

const printBoard = x => {
  // ... write your code here
  for (let baris = 0; baris < x.length; baris++) {
    console.log(x[baris].join(" | ") );
  }

}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
