"use strict";

const temperatures = [12, 5, -5, 0, 4];

function printForecast(arr) {
  // Check type is an array
  if (!Array.isArray(arr)) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}°C in ${i + 1} days`);
  }
}

printForecast(temperatures);
