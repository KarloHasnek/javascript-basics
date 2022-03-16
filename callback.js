function execute(fn) {
  fn();
}

function callback() {
  console.log("Log something");
}

execute(callback);

// execute(function () {
//   console.log("Log something");
// });

const arr = [0, 1, 2, 3];
const arr2 = arr.map(function (num) {
  return num + 1;
});

console.log(arr, arr2);
