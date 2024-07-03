/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let button = document.querySelector("#buttonGenerar");
button.addEventListener("click", generatedNewCard);

setInterval(generatedNewCard, 5000);

window.onload = function() {
  //write your code here
  generatedNewCard();
};

function generatedNewCard() {
  let paloArr = ["♥", "♠", "♣", "♦"];
  let numArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];

  let num = Math.floor(Math.random() * numArr.length);
  let palo = Math.floor(Math.random() * paloArr.length);

  let paloArriba = document.querySelector("#topPalo");
  paloArriba.innerHTML = paloArr[palo];

  if (paloArr[palo] === "♥" || paloArr[palo] === "♦") {
    paloArriba.style.color = "red";
  } else {
    paloArriba.style.color = "black";
  }
  document.querySelector("#bottomPalo").innerHTML = paloArriba.innerHTML;
  document.querySelector("#bottomPalo").style.color = paloArriba.style.color;

  document.querySelector("#value").innerHTML = numArr[num];
}
