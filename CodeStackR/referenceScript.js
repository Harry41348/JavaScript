'use strict';

// DOM - Document Object Model

// Single element selectors
const list = document.querySelector('#list');

// Multiple element selectors
const listItems = document.querySelectorAll('.list-item');

listItems.forEach((item) => {
  console.log(item.textContent);
});

// Events

const btn = document.getElementById('myBtn');
btn.addEventListener('click', (e) => {
  btn.style.background = 'blue';
});
