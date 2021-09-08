'use strict';
/*
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 5;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let gameOver = false;
let highscore = 0;

document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!gameOver) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No number!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = guess;
      gameOver = true;

      if (score >= highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too high...';
      score -= 1;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too low...';
      score -= 1;
    } else {
      document.querySelector('.message').textContent = 'Error';
    }
    document.querySelector('.score').textContent = score;
  }

  if (score <= 0) {
    document.querySelector('.message').textContent = '👎 Game over!';
    document.querySelector('body').style.backgroundColor = '#e74c3c';
    gameOver = true;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  gameOver = false;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
