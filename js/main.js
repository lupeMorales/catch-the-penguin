"user strict";
const penguins = document.querySelectorAll(".js-penguin");
const score = document.querySelector(".js-score");
const totalScore = document.querySelector(".js-actualScore");
const btnPlayAgain = document.querySelector(".js-playAgain");
const time = document.querySelector(".js-time");
const warning = document.querySelector(".js-warning");
const windowModal = document.querySelector(".js-modal");
const windowScore = document.querySelector(".js-modalScore");
const initialModal = document.querySelector(".js-modalCount");

let count = 0;
let timer = 14;
let modalCount = 4;
function reset() {
  count = 0;
  timer = 14;
  modalCount = 4;
}

function scoreCounter() {
  count++;
  score.innerHTML = count;
}
function stopCounter() {
  count = count;
  score.innerHTML = count;
}
function stopPenguins() {
  penguins.forEach((item) => {
    item.style.animation = "hidden 1.4s ease-in-out";
  });
}
function showScore() {
  windowScore.classList.remove("hidden");
  totalScore.innerHTML = count;
}

function addPenguinListener() {
  for (const penguin of penguins) {
    penguin.addEventListener("click", handleClickPeguin);
  }
}
function handleClickPeguin(ev) {
  timer !== 0 ? scoreCounter() : stopCounter();
}
function handleClickPlayAgain(ev) {
  ev.preventDefault();
  console.log("no misiela");
  windowScore.classList.add("hidden");
  windowModal.classList.remove("hidden");
  reset();
  startGame();
}
function countDown() {
  timer--;
  time.innerHTML = timer;
  if (timer === 0) {
    timeOver();
    setTimeout(showScore, 3000);
  }
}
id = setInterval(countDown, 1000);

function startGame() {
  console.log("empieza el juego");
  modalCount--;
  initialModal.innerHTML = modalCount;
  if (modalCount === 0) {
    initialModal.innerHTML = "Go";
    clearInterval(idInitialCount);
    windowModal.classList.add("hidden");
    countDown();
  }
}
idInitialCount = setInterval(startGame, 1000);

function timeOver() {
  clearInterval(id);
  warning.innerHTML = "game over!";
  stopPenguins();
}
btnPlayAgain.addEventListener("click", handleClickPlayAgain);
startGame();
addPenguinListener();
