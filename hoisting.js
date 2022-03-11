// How i see it:

// if (true) {
//   var i = 5;
// }

// How JavaScript sees it:

// var i;

// if (true) {
//   i = 5;
// }

// ///////////////////////////////////////////////////

// console.log(i);

// if (true) {
//   console.log(i);
//   let i = 5;
// }

// let i;

// if (true) {
//   i = 5;
// }

// console.log(i);

let sum = 0;
const fixedValue = 5;

for (let i = 0; i < 10; i++) {
  sum += fixedValue;
}

console.log(sum);
