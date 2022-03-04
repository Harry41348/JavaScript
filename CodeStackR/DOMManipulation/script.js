'use strict';

// Appending

const body = document.body;
body.append('Hello World'); // Can append a string with .append
// body.appendChild('Hello World'); // Cannot append a string with .appendChild

// Creating elements

const div = document.createElement('div');
div.innerText = 'Hello World (Div)';
div.textContent = 'Hello World (Div)';
body.append(div); // Can use .appendChild as well

const divs = document.querySelector('div');
console.log(divs.textContent);
console.log(divs.innerText);

// Removing elements

divs.remove();

// Modifying attributes

const myDiv = document.querySelector('#myDiv');
myDiv.setAttribute('id', 'differentDiv');
myDiv.id = 'myDiv';
myDiv.removeAttribute('id');
