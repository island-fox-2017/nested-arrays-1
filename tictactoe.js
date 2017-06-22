function tic_tac_toe_board () {
  // ...

  let letterX = 'X',
    letterO = 'O',
    result = [],
    xCount = 0,
    oCount = 0;
    
    for(let row=0; row<3; row++){
      let arr=[]
      for(let col=0; col<3; col++){
        let randomDice = Math.ceil(Math.random()*3)
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
    return result.join(' | ')
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
