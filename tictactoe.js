function tic_tac_toe_board () {
  // ...
  const board = []
  let sizeBoard = 3
  var x = 0 , o=0
  for (let i = 0; i < sizeBoard ; i++) {
    board.push([])
  }
  for (let i = 0; i < sizeBoard ; i++) {
    for (let j = 0; j < sizeBoard; j++) {
      let dahulu  = Math.floor(Math.random()*2+0)
      if(dahulu == 1 && x<=5 || o>=5 ){
        board[j].push('x')
        x++
      }else{
        board[j].push('o')
        o++
      }
    }
  }

  return board
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
