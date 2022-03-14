// Zadatak:
// 1. napisi fju koja vraca najmanji element niza
// 1. napisi fju koja vraca najveci element niza
// 1. napisi fju koja vraca zbroj najmanjeg inajveceg elementa niza

function min(numbers) {
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i];

    if (number < min) {
      min = number;
    }
  }

  return min;
}

function max(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i];

    if (number > max) {
      max = number;
    }
  }

  return max;
}

function minMax(numbers) {
  return min(numbers) + max(numbers);
}

const numbers = [2, 3, 5, 4, 6, 7, 9, 5, 1, 2, 4, 6, 8, 7, 5, 4];

const minNumber = min(numbers);
const maxNumber = max(numbers);
console.log(minNumber, maxNumber, minMax(numbers));
