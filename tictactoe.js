function tic_tac_toe_board () {
  var x = 0;
  var o = 0;
  var toeBoard = [];

  for (var i = 0; i <= 2; i++) {
    var tabelBaru = [];

    for(var j=0; j<=2; j++) {
    var random = Math.floor(Math.random()*2);
    if(random == 1 && x <5) {

      tabelBaru.push('x');
      x += 1
    }
    else if(o<=4){

      tabelBaru.push('o');
      o+=1
    }
  }toeBoard.push(tabelBaru);

}return toeBoard;
}

     // ...



console.log(tic_tac_toe_board()) // => make a random tic tic board
