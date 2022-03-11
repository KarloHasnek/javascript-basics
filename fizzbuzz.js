var inputNumber = +process.argv[2];

console.log("Input:", inputNumber);

if (inputNumber % 12 === 0) {
  console.log("FizzBuzz");
} else if (inputNumber % 3 === 0) {
  console.log("Fizz");
} else if (inputNumber % 4 === 0) {
  console.log("Buzz");
} else {
  console.log("Hmmm...");
}
