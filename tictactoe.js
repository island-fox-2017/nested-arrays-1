const tic_tac_toe_board = () => {
  let x = 0;
  let o = 0;
  let ticTac = [];

  for (var i = 0; i < 3; i++) {
    ticTac.push([]);
    for (var j = 0; j < 3; j++) {
      let random = Math.floor(Math.random() * 2);
      if ((random == 0) && (x < 5 || o == 4)) {
        ticTac[i].push('x')
        x++
      } else {
        ticTac[i].push('o')
        o++
      }
    }
  }
  var print = '';
  for (var i = 0; i < ticTac.length; i++) {
    print += ticTac[i].join(' || ')+ '\n';
  }
  console.log(print);
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
