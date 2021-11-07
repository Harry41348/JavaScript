const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    if (answer >= 0 && answer < this.answers.length) {
      this.answers[answer] += 1;
    } else {
      console.log('Incorrect input');
    }
    this.displayResults();
  },
  displayResults() {
    let type = prompt('Displays results as an array or string?');
    if (type == 'array') {
      console.log(this.answers);
    } else if (type == 'string') {
      let str = '';
      for (let result = 1; result < this.answers.length; result++) {
        str += this.answers[result];
        if (result != this.answers.length) str += ', ';
      }
      console.log(str);
    } else {
      console.log('Incorrect input');
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
