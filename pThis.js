//1
let calculator = {
  read() {
    this.a = prompt("Enter a number: ");
    this.b = prompt("Enter another number");
  },

  sum() {
    return +this.a + +this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

//2
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
    return this;
  },
};
