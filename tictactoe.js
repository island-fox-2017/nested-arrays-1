//pseudocode
//variabel yg menampung hasil looping dan random .
//looping untuk membuat board
//loopng untuk mengisi boardnya
//konsidi dimana tidak boleh lebih dari 5x isi yang sama

function tic_tac_toe_board () {
  // ...
  let board = [];
  let random = Math.floor(Math.random()*2);
  let countX = 1;
  let countO = 1;

  for(let i=0; i< 3;i++){
    board.push([]);
    for(let j=0; j<3;j++){
      if(countX >=5){
        board[i].push("o");
      }
      else if(countO >=5){
        board[i].push("x");
      }
      else{
        if(random == 0 ){
          board[i].push("o");
          countO++;
        }
        else if(random == 1 ){
          board[i].push("x");
          countX++;
        }
      }
    }
  }

  return board
}

console.log(tic_tac_toe_board())
