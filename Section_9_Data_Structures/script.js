'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Flights exercise

const flightRows = flights.split('+');

for (const flight of flightRows) {
  const flightRows = flight.split(';');
  let outputStr =
    flightRows[0].replace(/_/g, ' ').trim() +
    ' from ' +
    flightRows[1].substr(0, 3).toUpperCase() +
    ' to ' +
    flightRows[2].substr(0, 3).toUpperCase() +
    ' (' +
    flightRows[3].replace(':', 'h') +
    ')';
  console.log(outputStr.padStart(50, ' '));
}

// Splitting

/*console.log('This+is+my+string'.split('+'));
console.log('Harry Wijnschenk'.split(' '));

const [firstName, lastName] = 'Harry Wijnschenk'.split(' ');

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);*/

// Working with strings
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Air'));

console.log(airline.slice(4));
console.log(airline.slice(0, airline.indexOf(' '))); // First word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Last word

console.log(airline.slice(-2)); // Last 2 letters

const email = 'hello@harryw.com';
const loginEmail = ' Hello@hArryw.Com \n';
const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email == normalizedEmail);

// replacing
const priceGB = '£288.97';
const priceUS = priceGB.replace('£', '$');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));
*/
// Sets
/*const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

console.log(new Set(staff).size);
*/
// Maps
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('open', 11).set('close', 23);

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(answer == question.get('correct')));
*/
// For-of loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
// for (const item of menu.entries()) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
// Short Circuiting

/*console.log(3 || 'Harry');
console.log('' || 'Harry');
console.log(undefined || 0 || '' || true || 23);

const guests = restaurant.numGuests || 10;
console.log(guests);

console.log(0 && 'Harry');
console.log(1 && 'Harry');*/

// The spread operator

/* const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); */

// Object destructing
/*
console.log('--- Destructuring Objects ---');

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
*/
// Nested objects
/*
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

console.log('--- Destructuring Arrays ---');

const arr = [2, 3, 4];
let [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

[x, y] = [y, x];
console.log(x, y);

// Nested destructuring
const nested = [2, 4, [6, 8]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
