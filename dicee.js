
var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomDiceImage = "dice" + randomNumber1 +".png";
var randomImageSrouce  = "images/" +randomDiceImage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSrouce);


var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomDiceImage2 = "images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1> randomNumber2){
  document.querySelector("h1").innerHTML = "player one has Won"
}else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player two has Won the game"
} else {
  document.querySelector("h1").innerHTML = "DRAW"

}
