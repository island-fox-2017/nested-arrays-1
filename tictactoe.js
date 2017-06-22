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

        if(random == 1 && jumlahX <= 4){
          boardtictac[i].push("x")
          jumlahX = jumlahX + 1;
            // if(jumlahX<=4){
              random =  Math.floor(Math.random()*2);
            // } else {
            //   random = 0;
            // }
        }else if(jumlahO<=4){
          boardtictac[i].push("o")
          random =  Math.floor(Math.random()*2);
          jumlahO = jumlahO + 1;
            if(jumlahO<=4){
              random =  Math.floor(Math.random()*2);
            } else {
              random = 1;
            }
         }else {
           boardtictac[i].push("x")
         }

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
