'use strict'

const makeChessboard = () => {

  let bidakRaja  = ['Benteng','Kuda','Menteri','Raja','Ratu','Menteri','Kuda','Benteng'];
  let bidakPrajurit  = [' Pion '];
  let chessboard = [];

  for (var i = 0; i < 8; i++) {
    chessboard.push([]);
    for (var j = 0; j < 8; j++) {
      if (i == 0) {
        chessboard[i].push(bidakRaja[j] + ' putih');
      } else if (i == 1) {
        chessboard[i].push(bidakPrajurit[0]+ ' putih');
      } else if (i == 6) {
        chessboard[i].push(bidakPrajurit[0] + ' hitam');
      } else if (i == 7) {
        chessboard[i].push(bidakRaja[j] + ' hitam');
      } else {
        chessboard[i].push('XXXXXXXXXXXX');
      }
    }
  }
  var print = '';
  for (var i = 0; i < chessboard.length; i++) {
    print += chessboard[i].join(' || ')+ '\n';
  }
  console.log(print);
}

const printBoard = p => {
  // for (var i = 0; i < 8; i++) {
  //   //console.log(chessboard += x[i].join(' |'));
  //   console.log(String(p[i]).replace(/,/g, ' || '));
  // }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
