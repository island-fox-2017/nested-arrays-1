function tic_tac_toe_board() {
  debugger
  let board = []
  var x = 0
  var o = 0

  for (var col = 0; col < 3; col++) {
    board.push([])
    for (var row = 0; row < 3; row++) {
      var random = Math.floor(Math.random() * 2)
      if (random == 0 && x < 5 || o >= 5) {
        board[col].push('X')
        x += 1
      } else {
        board[col].push('O')
        o += 1
      }
    }
  }
  return board
}
console.log(tic_tac_toe_board()) // => make a random tic tic board
