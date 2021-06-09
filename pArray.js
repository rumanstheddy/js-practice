// 1
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");

styles[Math.floor(styles.length / 2)] = "Classics";

for (let style of styles) {
  console.log(style);
}

styles.shift();

styles.unshift("Rap", "Reggae");

for (let style of styles) {
  console.log(style);
}

// 2
function sumInput() {
  let inputArr = [];

  while (true) {
    let input = +prompt("Enter a value", 0);

    if (input === "" || input === null || !isFinite(input)) break;

    inputArr.push(+input);
  }

  let sum = 0;
  for (let input of inputArr) {
    sum += input;
  }

  return sum;
}

sumInput();

// 3
function maxSubArrSum(arr) {
    let partialSum = 0;
    let sum = 0;

    for (let item of arr) {
        partialSum += +item;
        sum = Math.max(partialSum, sum);
        if (partialSum < 0) partialSum = 0;
    }

    return sum;
}