var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "./images/"+"dice"+randomNumber1+".png";
document.getElementsByClassName("img1")[0].setAttribute("src", randomDiceImage);

//for 2nd dice
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "./images/"+"dice"+randomNumber2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src", randomDiceImage);

//logic to display winner
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 2 Wins!"
}
else{
    document.querySelector("h1").textContent = "Draw!"
}

