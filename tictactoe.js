function tic_tac_toe_board () {
var hasil = [];
var kali = 0
var nol = 0
// var hitung = [];
for(var i= 0; i<3;i++){
  let random = Math.floor(Math.random()*2)+0;
  hasil.push([])
  for(var j= 0 ; j<3 ; j++){
    if(random == 1 ){
      if(nol == 5 ){
        hasil[i].push("o")
        kali++
      }
      else if (nol < 5){
        hasil[i].push("x")
        nol++
      }
    }
    if (random == 0){
      if(kali == 5){
        hasil[i].push("x")
        nol++
      }
      else if(kali < 5){
        hasil[i].push("o")
        kali++
      }
      
    }
  }

}
var print = ""
for(var i = 0; i<hasil.length; i++){
  print += hasil[i].join(" | ")+ "\n";
}
return print;


  // ...
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
