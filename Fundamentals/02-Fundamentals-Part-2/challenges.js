'use strict';

function checkWinner(team1, team2) {
    if(team1 > team2) {
        console.log("Team 1 has a higher average score!")
    } else if(team1 < team2) {
        console.log("Team 2 has a higher average score!")
    } else {
        console.log("The teams have drawed!")
    }
}

const averageScore = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const dolphinsScore1 = 44;
const dolphinsScore2 = 23;
const dolphinsScore3 = 71;

const dolphinsAverageScore = averageScore(dolphinsScore1, dolphinsScore2, dolphinsScore3);

const koalasScore1 = 65;
const koalasScore2 = 54;
const koalasScore3 = 49;

const koalasAverageScore = averageScore(koalasScore1, koalasScore2, koalasScore3);

checkWinner(dolphinsAverageScore, koalasAverageScore);

// Challenge 2

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bill = [125, 555, 44];
let tips = [];
for (let i = 0; i < bill.length; i++) {
    tips[i] = calcTip(bill[i]);
    
}
console.log(tips);

// Challenge 3

const mark = {
    firstName: "Mark",
    lastName: "Miller",
    weight: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.weight / this.height**2;
        return this.bmi;
    }
}

const john = {
    firstName: "John",
    lastName: "Smith",
    weight: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.weight / this.height**2;
        return this.bmi;
    }
}

console.log(mark.calcBMI());
console.log(john.calcBMI());