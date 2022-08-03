"user strict";
const penguins = document.querySelectorAll(".js-penguin");
const score = document.querySelector(".js-score");
const time = document.querySelector(".js-time");
const warning = document.querySelector(".js-warning");

let count = 0;
let timer = 6;

function scoreCounter() {
  count++;
  score.innerHTML = count;
}
function stopCounter() {
  count = count;
  score.innerHTML = count;
}
function addPenguinListener() {
  for (const penguin of penguins) {
    penguin.addEventListener("click", handleClickPeguin);
  }
}
function handleClickPeguin(ev) {
  timer !== 0 ? scoreCounter() : stopCounter();
}
function countDown() {
  timer--;
  time.innerHTML = timer;
  if (timer === 0) {
    timeOver();
  }
}
id = setInterval(countDown, 1000);

function timeOver() {
  clearInterval(id);
  warning.innerHTML = "game over!";
}

addPenguinListener();
countDown();
