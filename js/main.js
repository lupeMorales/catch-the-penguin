"user strict";
const penguins = document.querySelectorAll(".js-penguin");
const score = document.querySelector(".js-score");
const time = document.querySelector(".js-time");
const warning = document.querySelector(".js-warning");
const windowModal = document.querySelector(".js-modal");
const initialModal = document.querySelector(".js-modalCount");

let count = 0;
let timer = 14;
let modalCount = 4;

function scoreCounter() {
  count++;
  score.innerHTML = count;
}
function stopCounter() {
  count = count;
  score.innerHTML = count;
}
function stopPenguin() {
  penguins.forEach((item) => {
    item.style.animation = "hidden 1.4s ease-in-out";
  });
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
  stopPenguin();
}
function startGame() {
  modalCount--;
  initialModal.innerHTML = modalCount;
  if (modalCount === 0) {
    initialModal.innerHTML = "Go";
    windowModal.classList.add("hidden");
    countDown();
  }
}
setInterval(startGame, 1000);

startGame();
addPenguinListener();
