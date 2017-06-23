function tic_tac_toe_board () {
  // ...
  let x = [];
  let o = [];
  let papan = [];
  
  for (let i = 0; i < 3; i++) {
    let baris = [];
    for (let j = 0; j < 3; j++) {
      let acak = Math.random();
      
      if (acak < 0.5 && x < 5) {
        x++;
        baris.push('X');
      } else if (o < 5) {
        o++;
        baris.push('O');
      } else {
        baris.push('X' || 'O');
      }
    }
    papan.push(baris);
  }
  return papan;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
