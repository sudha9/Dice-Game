var randomNumber1=  Math.floor(Math.random()*6) +1;
var randomNumber2=  Math.floor(Math.random()*6) +1;

var randomImg1 = "images/dice" + randomNumber1+ ".png";
var randomImg2 = "images/dice" + randomNumber2+ ".png";

// alert(randomNumber1+ " and " + randomNumber2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}else if(randomNumber1 < randomNumber2)
  {
    document.querySelector("h1").innerHTML="Player 2 wins 🚩!";
  }else{
    document.querySelector("h1").innerHTML="Its a Draw!";
  }



var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImg1);

var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImg2);
