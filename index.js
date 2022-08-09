document.querySelector(".btn").addEventListener("click", function(){
    var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDice = "dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomDice);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDice2 = "dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomDice2);

if(randomNumber1>randomNumber2){
    
    document.querySelector("h1").textContent ="Player 1 is the winner 🚩"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent ="Player 2 is the winner 🚩"
}
else{
    document.querySelector("h1").textContent ="There is a tie"
}
setTimeout(function(){document.querySelector("h1").textContent="click button below to start"}
,5000)
})