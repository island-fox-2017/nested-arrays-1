function tic_tac_toe_board () {
  var papan = [];
  var jumlahX = 0;
  var jumlahO = 0;

  for (var i = 0; i < 3; i++) {
    var baris = [];
    for (var j = 0; j < 3; j++) {
      var kemunculanAcak = Math.floor(Math.random() * 2);
      if (kemunculanAcak == 1 && jumlahX < 5 || jumlahO == 5) {
        baris.push('X');
        jumlahX++;
      } else {
        baris.push('O');
        jumlahO++;
      }
    }
    papan.push(baris);
  }
  return papan;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
