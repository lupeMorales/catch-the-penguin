"user strict";
const penguins = document.querySelectorAll(".js-penguin");
const score = document.querySelector(".js-score");

let count = 0;

function scoreCounter() {
  count++;
  score.innerHTML = count;
}
function addPenguinListener() {
  for (const penguin of penguins) {
    penguin.addEventListener("click", handleClickPeguin);
  }
}
function handleClickPeguin(ev) {
  scoreCounter();
}

addPenguinListener();
