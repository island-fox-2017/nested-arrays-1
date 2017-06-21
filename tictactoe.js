function tic_tac_toe_board () {
let ticSlot = [];
let tempSlot = [];
let countX = 0;
let countO = 0;
// let x = 0;

// return Math.random();
for(var i = 0; i < 3; i++){
  ticSlot.push([]);
  for(var baris = 0; baris < 3; baris++){
    if(Math.floor(Math.random()*2) == 1 && countX <=5){
      // Push X dan countX
      // tempSlot.push('X');

      ticSlot[i].push('X');
      // console.log(ticSlot[i]);
      countX += 1;
    } else if(countO<=5){
      //push O dan countO
      // tempSlot.push('0');

      ticSlot[i].push('O');
      // console.log(ticSlot[i]);

      countO += 1;
    }
  }
}

// for(let i = 0; i < 3; i++){
//   for(let j = 0; j < 3; j++){
//     //for(let k =0; k <9; k++){
//     let x = 0;
//     ticSlot[i][j].push(tempSlot[x =+ 1]);
//     //}
//   }
// }

return ticSlot;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
