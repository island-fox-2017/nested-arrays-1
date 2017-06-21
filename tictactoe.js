function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  // console.log(array);
  return array;
}


let ticBox = [];
let batas0 = 0;

for (let i = 0; i <= 9; i++) {
  let batasX = Math.floor(Math.random() * 1) + 4;
  if (i <= batasX) {
    ticBox.push('X')
  } else {
    ticBox.push('0');
  }
}

function tic_tac_toe_board() {
  // ...
  var finalTicTacToeBox = [];
  let j, i, potong = 3
  var acak = shuffleArray(ticBox);
  for (i = 0, j = acak.length; i < j; i += potong) {
    finalTicTacToeBox.push(acak.slice(i, i + potong));
  }
  return finalTicTacToeBox;
}

function printBoardTicTacToe(tictac) {
  let print = ''
  for (let i = 0; i < 3; i++) {
    print += tictac[i].join('|') + '\n';
  }
  return print
}

//console.log(shuffleArray(ticBox));
console.log(printBoardTicTacToe(tic_tac_toe_board())) // => make a random tic tic board
