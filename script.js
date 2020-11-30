'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(typeof guess);

  if (score > 0) {
    if (!guess) {
      document.querySelector(`.message`).textContent = `⛔ No Number!`;
    } else if (guess === secretNumber) {
      document.querySelector(
        `.message`
      ).textContent = `🎉 Correct secretNumber!`;
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`body`).style.backgroundColor = `#60b347`;
      document.querySelector(`.number`).style.width = `30rem`;
      if (score > highscore) {
        highscore = score;
      }
    } else if (guess > secretNumber) {
      document.querySelector(`.message`).textContent = `📈 Too high!`;
      score--;
    } else if (guess < secretNumber) {
      document.querySelector(`.message`).textContent = `📉 Too low!`;
      score--;
    }
  }
  if (score === 0) {
    document.querySelector(`.message`).textContent = `💥 You lost the game`;
  }
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.highscore`).textContent = highscore;
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
});
