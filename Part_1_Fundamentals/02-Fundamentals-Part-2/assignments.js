'use strict';

// function percentageOfWorld(population){
//     const globalPopulation = 7900;
//     return (population / globalPopulation) * 100;
// }

// console.log(percentageOfWorld(1441));

const percentageOfWorld3 = population => (population / 7900) * 100;

// console.log(percentageOfWorld3(1441));

const populations = [65, 300, 46, 17];
console.log(populations.length == 4);

const percentages = [];
percentages.push(percentageOfWorld3(populations[0]));
percentages.push(percentageOfWorld3(populations[1]));
percentages.push(percentageOfWorld3(populations[2]));
percentages.push(percentageOfWorld3(populations[3]));

console.log(percentages);