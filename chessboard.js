'use strict'

const makeChessboard = () => {
  let chessboard = []
  var bidak = ['B','K','P','M','R','P','K','B'];
  var pion = 'p';
  // var bidakPutih = ['BP','KP','PP','PMP','RP','PP','KP','BP'];
  // var pionPutih = ['pP'];

  for(let i = 0; i < 8; i++){
    chessboard.push([]);
    for(let j = 0; j < 8; j++){
      if(j == 0){
        chessboard[i].push('|'+bidak[i]+' H|');
      } else if(j == 1){
        chessboard[i].push('|'+pion+' H|');

      } else if (j > 1 && j < 6){
        chessboard[i].push('| |');
      } else if(j == 6){
        chessboard[i].push('|'+pion+' P|');
      } else {
        chessboard[i].push('|'+bidak[i]+' P|');
      }
    }
  }
  return chessboard
}
//console.log(makeChessboard());
const printBoard = x => {
//varibel bidak catur

let print;
for(let i =0; i < x.length; i++){
  print = x[i].join(' ');
  console.log(print);
}

}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}

//165
