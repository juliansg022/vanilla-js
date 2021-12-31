// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
  firstNumber: 0,
  secondNumber: 0,

  read() {
    this.firstNumber = prompt("Type the first number");
    this.secondNumber = prompt("Type the second number");
  },

  sum() {
    return +this.firstNumber + +this.secondNumber;
  },

  mul() {
    return this.firstNumber * this.secondNumber;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
