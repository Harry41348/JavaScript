'use strict';

// Selecting elements
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting condition
document.querySelector('#score--0').textContent = 0;
document.querySelector('#score--1').textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;

// Functions
function switchPlayer() {
  const scoreEl = document.getElementById(`score--${currentPlayer}`);

  // Resetting the score
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent = 0;

  // Updating the score
  scoreEl.textContent = scores[currentPlayer];
  if (scoreEl.textContent >= 100) {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--winner');
  } else {
    // Switching the player
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.remove('player--active');
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--active');
  }
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate a random dice roll
  const dice = Math.ceil(Math.random() * 6);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true, switch players
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    switchPlayer();
  }
});

// Holding score functionality
btnHold.addEventListener('click', function () {
  scores[currentPlayer] += currentScore;
  switchPlayer();
});

// Starting a new game
btnNew.addEventListener('click', function () {
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;

  scores[0] = 0;
  scores[1] = 0;

  currentScore = 0;
  currentPlayer = 0;

  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');

  diceEl.classList.add('hidden');
});
