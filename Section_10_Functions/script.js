'use strict';
/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
// createBooking('LH123', , 5); Can't skip a value without setting it to undefined
createBooking('AH323', undefined, 300);

*/

/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 243531284,
};

function checkIn(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 243531284) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
*/

/*
function oneWord(str) {
  return str.replaceAll(' ', '');
}

function capitalize(str) {
  const rtn = str[0].toUpperCase() + str.slice(1);
  return rtn;
}

// Higher-order function
function transformer(str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
}

console.log(oneWord('This is my sentence'));
console.log(capitalize('capitalize my string'));
transformer('javaScript is the best!', capitalize);
*/

/*
function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const greeterHey = greet('Hey');
greeterHey('Harry');
greeterHey('Steven');
*/

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(123, 'Harry Wijnschenk');
lufthansa.book(635, 'John Smit');

console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'David Jordan');

const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);
console.log(eurowings);

// Bind method
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
*/

/*
const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

// IIFE (Immediately invoked function expression)
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();
*/

function secureBooking() {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
}

const booker = secureBooking();

booker();
booker();
booker();

// Example 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// const perGroup = 1000;
boardPassengers(180, 3);
