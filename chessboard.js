'use strict'

const makeChessboard = () => {
  let catur = ['Benteng','Kuda','Peluncur','Perdana Menteri','Raja', 'Peluncur','Kuda','Benteng'];
  let pion = 'Pion';
  var chessboard = [];
  for(var i=0; i<catur.length; i++) {
    //fungsi ny ap?
    chessboard.push([]);
    for(var j=0; j<catur.length; j++){
    if(i==0) {
      chessboard[i].push(catur[j]+' Hitam');
    }
    else if(i==1) {
    chessboard[i].push(pion);
    }
    else if(i>1 && i<6) {
      chessboard[i].push('');
    }
    else if(i==6) {
      chessboard[i].push(pion);
    }
    else {
      chessboard[i].push(catur[j]+' Putih');
    }
  }


  }

    // ... write your code here
  return chessboard
}

//////////////////////////////////////////////////////////////////////////////////////////////////

const printBoard = chessboard => {

  for (var i = 0; i < 8; i++) {
  console.log(chessboard[i].join(' | '));  // ... write your code here
}


}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
