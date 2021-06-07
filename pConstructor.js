//1
function Calculator() {
  (this.read = function () {
    this.a = prompt("Enter a number: ");
    this.b = prompt("Enter another number: ");
  }),
    (this.sum = function () {
      return +this.a + +this.b;
    });
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();

calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

//2
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("Enter a number");
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();

console.log(accumulator.value);
