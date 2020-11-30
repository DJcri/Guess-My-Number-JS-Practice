'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const n = document.querySelector(`.number`);
const body = document.querySelector(`body`);
const objScore = document.querySelector(`.score`);
const objHighscore = document.querySelector(`.highscore`);

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(typeof guess);

  if (score > 0) {
    if (!guess) {
      displayMessage(`⛔ No Number!`);
    } else if (guess === secretNumber) {
      displayMessage(`🎉 Correct Number!`);
      n.textContent = secretNumber;
      body.style.backgroundColor = `#60b347`;
      n.style.width = `30rem`;
      if (score > highscore) {
        highscore = score;
      }
    } else if (guess > secretNumber) {
      displayMessage(`📈 Too high!`);
      score--;
    } else if (guess < secretNumber) {
      displayMessage(`📉 Too low!`);
      score--;
    }
  }
  if (score === 0) {
    displayMessage(`💥 You lost the game`);
  }
  objScore.textContent = score;
  objHighscore.textContent = highscore;
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundColor = `#222`;
  displayMessage(`Start guessing...`);
  n.style.width = `15rem`;
  objScore.textContent = score;
  n.textContent = `?`;
});
