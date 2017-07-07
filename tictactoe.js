// A Random Tic Tac Toe Board 

function tic_tac_toe_board () {
  let board = [];
  let totalX = 0;
  let totalO = 0;
  for (var i=0; i<3; i++) {
    let baris = [];
    for (var z=0; z<3; z++) {
      var random = Math.floor(Math.random()*2);
      if (random == 1 && totalO < 5 || totalX == 5) {
        // selama totalO msh di bawa 5, tambahin skali lg biar totalny jd 5
        baris.push('O');
        totalO ++;
      } else {
        baris.push('X');
        totalX ++;
      }
    }
    board.push(baris);
  }
  return board.join('||');
}

console.log(tic_tac_toe_board())

// console.log((Math.random())); // random number <1 && >0
// console.log((Math.random()*2)); // random number <2 && >0
// console.log(Math.floor(Math.random()*2)); // either 0 or 1, because we take the Math.floor of it
