'use strict'

const makeChessboard = () => {
  let papanCatur= [];
  let bidakRaja = ["Benteng", "Kuda", "Mentri", "Raja", "Ratu", "Mentri", "Kuda","Benteng"];
  let bidakPion = ["Pion"];

  for(var i=0 ; i<8; i++){
    papanCatur.push([])
    for (var j = 0; j < 8; j++) {
      if (i == 0){
        papanCatur[i].push(bidakRaja[j]+ " Putih")
      }
      else if (i == 1){
        papanCatur[i].push(bidakPion[0] + " Putih")
      }
      else if (i == 6) {
        papanCatur[i].push(bidakPion[0] + " Hitam")
      }
      else if (i == 7){
        papanCatur[i].push(bidakRaja[j]+" Hitam")
      }
      else {
        papanCatur[i].push("XXXXXXXXXX")
      }


    }
  }

var print = ""
for (var i = 0; i <papanCatur.length; i++) {
  print += papanCatur[i].join(" || ") + "\n"
}
  console.log(print);
}

const printBoard = x => {

}
printBoard(makeChessboard())
module.exports = {
  makeChessboard,
  printBoard
}
