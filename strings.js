var other = "and martians";
var helloWorld = `Hello world ${other}`;
var stringNumber = "5";
var number = 5;


console.log(number + stringNumber);
// = (String(number) + stringNumber); = String
// +stringNumber = string mijenja u number... same as - Number(stringNumber)
console.log(number, Number(number));
console.log(helloWorld.includes("Hello"));
console.log(helloWorld.slice(0,7));
console.log(helloWorld.split(" "));
console.log(helloWorld.length);