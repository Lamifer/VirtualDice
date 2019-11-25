var a = prompt("Enter player1 name : ");
if (a == null || a == "") {
    a = "Player 1";
  }

var b = prompt("Enter Player2 name : ");
if (b == null || b == "") {
    b = "Player 2";
  }


document.getElementById('Player1').innerHTML=a;
document.getElementById('Player2').innerHTML=b;

var randomNumber1=Math.floor(Math.random()*6+1);
var randomNumber2=Math.floor(Math.random()*6+1);

function fun1(){
	var imagesrc1 = "dice"+randomNumber1+".png";

	var imgflder1 = "images/"+imagesrc1;

	var image1 = document.querySelectorAll("img")[0];
	image1.setAttribute("src",imgflder1);

	document.querySelector("h1").innerHTML=b+" turns";

}

function fun2()
{
// var randomNumber2 = Math.floor(Math.random()*6+1);

var imagesrc2 = "dice"+randomNumber2+".png";

var imgflder2 = "images/"+imagesrc2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imgflder2);

if(randomNumber1>randomNumber2){
	document.querySelector("h1").innerHTML=a+" Wins";
}
else if(randomNumber1<randomNumber2){
	document.querySelector("h1").innerHTML=b+" Wins";
}
else {
	document.querySelector("h1").innerHTML="Draw";
}

}

// if(randomNumber1>randomNumber2){
// 	document.querySelector("h1").innerHTML="Player1 Wins";
// }
// else if(randomNumber1<randomNumber2){
// 	document.querySelector("h1").innerHTML="Player2 Wins";
// }
// else {
// 	document.querySelector("h1").innerHTML="Draw";
// }