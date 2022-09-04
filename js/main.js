"user strict";
const penguins = document.querySelectorAll(".js-penguin");
const score = document.querySelector(".js-score");
const bestScore = document.querySelector(".js-bestScore");
const totalScore = document.querySelector(".js-actualScore");
const btnPlayAgain = document.querySelector(".js-playAgain");

const time = document.querySelector(".js-time");
const warning = document.querySelector(".js-warning");
const window321 = document.querySelector(".js-window321");
const windowScore = document.querySelector(".js-modalScore");
const initialModal = document.querySelector(".js-modalCount");
const windowGame = document.querySelector(".js-game");

let count = 0;
let timer = 10;
let modalCount = 3;
const myBestScore = [];

function resetTimer() {
  timer = 10;
  time.innerHTML = timer;
}

function countDown() {
  initialModal.innerHTML = modalCount;
  modalCount--;
  /* initialModal.innerHTML = modalCount; */
  score.innerHTML = count;

  if (modalCount === 0) {
    initialModal.innerHTML = "Go";
    clearInterval(idInitialCount);
    window321.classList.add("hidden");
    resetTimer();
    startGame();
  }
}
idInitialCount = setInterval(countDown, 1000);

function startGame() {
  warning.innerHTML = "";
  addPenguinListener();
  windowGame.classList.remove("hidden");
  idTimer = setInterval(gameTimer, 1000);
}

function gameTimer() {
  timer--;
  time.innerHTML = timer;
  if (timer === 0) {
    timeOver();
    setTimeout(showScore, 3000);
  }
}

function scoreCounter() {
  count++;
  score.innerHTML = count;
}

function saveMyScore() {
  localStorage.setItem("score", count);
}
function loadMyScore() {
  const dataLocalStorage = localStorage.getItem("score");
  myBestScore.push(dataLocalStorage);
}

function stopPenguins() {
  penguins.forEach((item) => {
    item.style.animationIterationCount = 0;
    /*    item.classList.add("stop"); */
  });
}
function runningPenguins() {
  penguins.forEach((item) => {
    /* item.classList.remove("stop"); */
    item.style.animationIterationCount = "infinite";
  });
}

function showScore() {
  loadMyScore();
  renderMyBest();
  windowScore.classList.remove("hidden");
  windowGame.classList.add("hidden");
  totalScore.innerHTML = localStorage.getItem("score");
}
function renderMyBest() {
  let html = "";
  myBestScore.sort((a, b) => b - a);
  if (myBestScore.length >= 4) {
    myBestScore.splice(3, 1);
  }
  for (let i = 0; i < myBestScore.length; i++) {
    html += `<li class="subtitle best-scores__li">${myBestScore[i]}</li>`;
  }
  bestScore.innerHTML = html;
}

function addPenguinListener() {
  for (const penguin of penguins) {
    penguin.addEventListener("click", handleClickPeguin);
  }
}

function timeOver() {
  clearInterval(idTimer);
  warning.innerHTML = "time over!";
  stopPenguins();
  saveMyScore();
}
function reset() {
  count = 0;
  modalCount = 3;
}

function handleClickPeguin() {
  timer !== 0 ? scoreCounter() : null;
}
function handleClickPlayAgain(ev) {
  ev.preventDefault();
  windowScore.classList.add("hidden");
  window321.classList.remove("hidden");
  reset();
  setInterval(countDown, 1000);
  runningPenguins();
}

btnPlayAgain.addEventListener("click", handleClickPlayAgain);
countDown();
loadMyScore();
