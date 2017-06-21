function tic_tac_toe_board () {
  // ...

  let letterX = 'x',
    letterO = 'o',
    result = [],
    xCount = 0,
    oCount = 0,
    row,
    col,
    arr,
    randomDice;
    
    
    for(row=0; row<3; row++){
        arr=[]
      for(col=0; col<3; col++){
        randomDice = Math.ceil(Math.random()*3)
        if(randomDice == 1 && xCount<5){
          arr.push(letterX)
          xCount++
        }else if(oCount<5){
          arr.push(letterO)
          oCount++
        }else{
          arr.push(letterX)
        }
      }
      result.push(arr)
    }
    return result
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
