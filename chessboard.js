'use strict'

const makeChessboard = () => {
  let chessboard = []
  let catur = [" Benteng ", " Kuda "," Peluncur " , " Menteri " ," RAJA " , " Peluncur " ," Kuda " , " Benteng "];
  let prajurit = " Prajurit ";

  for(let i=0; i<catur.length; i++)
  {
    chessboard.push([]);
    for(let j = 0; j<catur.length; j++)
    {
      if(i == 0)// jika i sama dengan index ke 0
      {
        chessboard[i].push(catur[j]+" Hitam ");
        //console.log(chessboard);
      }
      else if(i == 1)
      {
        chessboard[i].push(prajurit);
        //console.log(chessboard);
      }
      else if(i>1 && i<6)
      {
        chessboard[i].push(" ");
      }
      else if(i == 6)
      {
        chessboard[i].push(prajurit);
      }
      else
      {
        chessboard[i].push(catur[j]+" Putih ");
      }
    }
  }
  return chessboard;
}


//console.log(makeChessboard());


const printBoard = x => {
  // ... write your code here
  //for(let i=0; )
  let join;
  for(let i=0; i<x.length; i++)
  {
    join = x[i].join(' ');
    console.log(join);
  }


}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
