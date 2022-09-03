"user strict";
const penguins = document.querySelectorAll(".js-penguin");
const score = document.querySelector(".js-score");
const bestScore = document.querySelector(".js-bestScore");
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
const myBestScore = [];

function countDown() {
  /*   initialModal.innerHTML = modalCount; */
  modalCount--;
  initialModal.innerHTML = modalCount;
  score.innerHTML = count;

  if (modalCount === 0) {
    initialModal.innerHTML = "Go";
    clearInterval(idInitialCount);
    windowModal.classList.add("hidden");
    startGame();
  }
}
idInitialCount = setInterval(countDown, 1000);

function startGame() {
  warning.innerHTML = "";
  gameTimer();
  addPenguinListener();
}

function gameTimer() {
  timer--;
  time.innerHTML = timer;
  if (timer === 0) {
    timeOver();
    setTimeout(showScore, 3000);
  }
}
id = setInterval(gameTimer, 1000);

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
  console.log("array myBest", myBestScore);
}

function stopPenguins() {
  penguins.forEach((item) => {
    item.style.animation = "hidden 1.4s ease-in-out";
  });
}

function showScore() {
  loadMyScore();
  renderMyBest();
  windowScore.classList.remove("hidden");
  totalScore.innerHTML = dataLocalStorage;
}
function renderMyBest() {
  let html = "";
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
  clearInterval(id);
  warning.innerHTML = "time over!";
  stopPenguins();
  saveMyScore();
}
function reset() {
  count = 0;
  timer = 14;
  modalCount = 4;
}

function handleClickPeguin() {
  timer !== 0 ? scoreCounter() : null;
}
function handleClickPlayAgain(ev) {
  ev.preventDefault();
  windowScore.classList.add("hidden");
  windowModal.classList.remove("hidden");
  reset();
  setInterval(countDown, 1000);
}

btnPlayAgain.addEventListener("click", handleClickPlayAgain);
countDown();
loadMyScore();
