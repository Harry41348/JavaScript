'use strict';

let Julia1 = [3, 5, 2, 12, 7];
let Julia2 = [9, 16, 6, 8, 3];
let Kate1 = [4, 1, 15, 8, 3];
let Kate2 = [10, 5, 6, 1, 4];

function checkDogs(julia, kate) {
  let juliaCats = [...julia].slice(1, -2);
  let allDogs = juliaCats.concat(kate);
  allDogs.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old.`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
}

checkDogs(Julia2, Kate2);
