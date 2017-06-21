function tic_tac_toe_board () {
  // ...
  let arr = [], result = "", okay = 0, okay2 = 0;
  for (let i = 0; i < 3; i++) {
    arr.push([]);
    for (let j = 0; j < 3; j++) {
      if ( (okay+okay2) < 9) {
        if (Math.floor(Math.random()*2+1) == 1 && okay < 5) {
          arr[i][j] = "X";
          okay++;
        }
        else if (okay2 < 5) {
          arr[i][j] = "O";
          okay2++;
        }
        else arr[i][j] = "X";
      }
    }
  }
  for (let k = 0; k < 3; k++) {
    arr[k] = arr[k].join(' | ')
    for (let l = 0; l < 3; l++) {
      result = arr.join('\n');
    }
  }
  return result;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
