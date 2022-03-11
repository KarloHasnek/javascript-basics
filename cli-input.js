/* primitivni tipovi podaktaka:
1. number
2. string
3. Boolean
4. undefined
5. null
6. symbol
7. BigInt  */

var inputParams = process.argv.slice(2);
var firstParam = inputParams[0];
var secondParam = inputParams[1];
var thirdParam = inputParams[2] || "No param passed";

//console.log(firstParam, secondParam, thirdParam, null);

// if (firstParam) {
//   console.log(`First param is truthy: ${firstParam}`);
// }

// if (secondParam) {
//   console.log(`Second param is truthy: ${secondParam}`);
// }

// if (thirdParam) {
//   console.log(`Third param is truthy: ${thirdParam}`);
// }

// if (firstParam || (secondParam && thirdParam)) {
//   console.log(
//     `All params are thruty: ${firstParam} ${secondParam}`,
//     thirdParam
//   );
// }

var allParams =
  firstParam && secondParam && thirdParam
    ? "All params are truthy"
    : "At least one param is falsy";

console.log(allParams);
