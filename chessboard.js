'use strict'

//benteng kuda menteri ratu raja menteri kuda benteng
// pion pion pion pion pion pion pion pion

const makeChessboard = () => {
  let chessboard = []
  // ... write your code here

  let pionPutih = [];
  let pionHitam = [];
  let setOfChess = ['Benteng', 'Kuda', 'Menteri', 'Ratu', 'Raja', 'Menteri', 'Kuda', 'Benteng'];
  let setOfChessHitam = [];
  let setOfChessPutih = [];

  for(let i = 0; i < setOfChess.length; i++)
  {
    setOfChessPutih.push(setOfChess[i] + ' Putih');
    setOfChessHitam.push(setOfChess[i] + ' Hitam');
    pionHitam.push('Pion Hitam');
    pionPutih.push('Pion Putih');

    if(i == 0)
    {
      chessboard.push(setOfChessPutih);
    }
    else if (i == 1)
    {
      chessboard.push(pionPutih);
    }
    else if (i == 6)
    {
      chessboard.push(pionHitam);
    }
    else if (i == 7)
    {
      chessboard.push(setOfChessHitam);
    }
    else
    {
      let emptySet = [];
      for(let j = 0; j < 8; j++)
      {
        emptySet.push(' ');
      }
      chessboard.push(emptySet);
    }
  }

  return chessboard
}

const printBoard = x => {
  // ... write your code here
  for(let i = 0; i < x.length; i++)
  {
    console.log(x[i].join(' | '));
  }
}

// console.log(makeChessboard());
printBoard(makeChessboard());

module.exports = {
  makeChessboard,
  printBoard
}
