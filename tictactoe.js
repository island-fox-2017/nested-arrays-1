function tic_tac_toe_board () {
  // ...
  var hasil = ''
  var arrHasil = []
  var countx = 0
  var counto = 0

    for (var i=0; i<3; i++) {
      var row = []
      for (var j=0; j<3; j++) {
        var random = Math.floor(Math.random()*2)
        // console.log(random);
        if (random==1 && counto<4 || countx==5) {
          row.push('x')
          counto += 1
        }
        else {
          row.push('o')
          countx += 1
        }
      }
      arrHasil.push(row)
    }

  for (var i=0; i<3; i++) {
    hasil += arrHasil[i].join('  |  ');
    hasil += '\n'
  }

  // console.log('jumlah x: '+countx);
  // console.log('jumlah o: '+counto);
  return hasil
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
