function tic_tac_toe_board ()
{
  // ...
  let board = [];

  let xc = 0;
  let oc = 0;
  var slices;
//console.log(test);
  for(let i=0; i<3; i++)
  {

    let tambah = [];
    for(let x=0; x<3; x++)
    {
      if(Math.floor(Math.random()*2) == 1 && xc <5)
      {
        tambah.push("X");
        xc += 1;
        //console.log(slices);
      }
      else if (oc < 5)
      {
        tambah.push("O");
        oc += 1;
      }
    }
    //console.log(tambah);
    board.push(tambah)
  }
  //board.push(tambah)
  return board;


}

console.log(tic_tac_toe_board()) // => make a random tic tic board
