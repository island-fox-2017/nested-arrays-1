
// chess !!
'use strict'

const makeChessboard = () => {
  let chessboard = [];
  let players = 'Rook Knight Bishop Queen King Bishop Knight Rook'.split(' ');
  let Pawns = 'Pawns'.repeat(8).match(/\D{5}/g); // repeat and split with count digit count
  let Empty = '__________'.repeat(32).match(/\D{10}/g) // 32 empty positions
  let BPlayers = players.concat(Pawns); // combine arrays
  let WPlayers = Pawns.concat(players);
  let black = [];
  let white = [];

  for (var z=0 ;z<BPlayers.length; z++) {
    black[z] = 'Black '+BPlayers[z]
    white[z] = 'White '+WPlayers[z]
  }

  var wholeBoard = black.concat(Empty).concat(white);

  let i,j,seperator = 8 // after every x digit make into new line
  for (i=0, j=wholeBoard.length; i<j; i+= seperator) {
    chessboard.push(wholeBoard.slice(i, i+seperator))
  }
  return chessboard;
}

const printBoard = x => { // from array in array into beautiful pretty line per line
  for (var w = 0; w < x.length; w++) {
        console.log(String(x[w].join(' || ')));
   }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
