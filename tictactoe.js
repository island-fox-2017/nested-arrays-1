function tic_tac_toe_board () {
  var boardtictac = [];
  var jumlahX = 0;
  var jumlahO = 0;
  var random =  Math.floor(Math.random()*2);

  for(i=0;i<3;i++){
    boardtictac.push([])
    }

  for(i=0;i<3;i++){
    for(j=0;j<3;j++){
      random =  Math.floor(Math.random()*2);
        if(random == 1 && jumlahX <= 4){
          boardtictac[i].push("x")
          jumlahX = jumlahX + 1;
        } else if(jumlahO<=4){
            boardtictac[i].push("o")
            jumlahO = jumlahO + 1;
        } //else {
        //    boardtictac[i].push("x")
        //  }

    }
  }

    function PosisiKebawah(){
      for(i=0;i<3;i++){
        console.log(boardtictac[i]);
      }
    return boardtictac;
    }


  return PosisiKebawah()
}
tic_tac_toe_board(); // => make a random tic tic board
