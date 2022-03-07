var isBool = Boolean(false); // is ili has = bool

console.log(Boolean(0), Boolean(1), Boolean(-1), Boolean(""), Boolean("0"));

// AND
console.log(0 && 0, 0 && 1, 1 && 0, 1 && 1);
console.log(Boolean("Hello") && Boolean("World"));
console.log(Boolean("Hello") && Boolean(""));
console.log(true && "Hello world");
console.log(false && "Hello world");

// OR
console.log(0 || 0, 0 || 1, 1 || 0, 1 || 1);
console.log(true || "Hello World");
console.log(false || "Hello World");

// NEGATION
console.log(!0, !1, !!1); // ! = negacija
console.log(Boolean(5), !!5); // ovo je isto

// IF, ELSE, ELSE IF
if (true) {
  console.log("First");
} else {
  console.log("Second");
}

if (false) {
  console.log("First");
} else {
  console.log("Second");
}

if (false) {
  console.log("First");
} else if (false) {
  console.log("Second");
} else console.log("third");

var isLowerThanFive = 4 + 5;

// >= vece jednako,  <= manje jednako
if (isLowerThanFive > 5) {
  console.log("It is!");
} else {
  console.log("It is not!");
}

if (isLowerThanFive == 5) {
  console.log("It is!");
} else {
  console.log("It is not!");
}

// ===  provjerava tip podatka te ih usporeduje
if ("9" === 9) {
  console.log("It is!");
} else {
  console.log("It is not!");
}

// ? - if, : - else
console.log(true ? "Hello" : "World");
console.log(false ? "Hello" : "World");

// ovo ne raditi
console.log(false ? "Hello" : "World" ? "Hmmm" : "What?");

var someValue = isLowerThanFive < 5 ? "Hello" : "World";

console.log(someValue);

// switch case
if (isLowerThanFive < 5) {
  console.log("lower than five");
} else if (isLowerThanFive === 5) {
  console.log("equals five");
} else if (isLowerThanFive > 5) {
  console.log("Larger than five");
}

var str = "ello";

switch (str) {
  case "hello":
    console.log("hello");
    break;
  case "Hello":
    console.log("Hello");
    break;
  case "hell":
    console.log("hell");
    break;
  default:
    console.log("default");
}
