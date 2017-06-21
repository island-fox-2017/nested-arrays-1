function tic_tac_toe_board () {
  let Arr = [];
  let random = Math.floor(Math.random()*2) + 4
  let tamp;
  let hasil =[]

  for (let i = 0; i < 9; i++) {
    if (i<random) {
      Arr.push('X');
    }else {
      Arr.push('O');
    }
  }
// =======================================================================
  for (let i = 0; i < Arr.length-1; i++) {
    let random2 = Math.floor(Math.random()*((Arr.length-1)-(i+1)))+(i+1)
    tamp =Arr[i]
    Arr[i] = Arr[random2]
    Arr[random2] = tamp
    // console.log(random2);
  }
  for (let i = 0;i<Arr.length; i+=3) {
    hasil.push(Arr.slice(i,i+3))
  }
  // =======================================================================

  let result = ""
  for (var i = 0; i < hasil.length; i++) {
    result+=hasil[i].join("|") + "\n"
  }
return result
// =======================================================================

}









console.log(tic_tac_toe_board()) // => make a random tic tic board
