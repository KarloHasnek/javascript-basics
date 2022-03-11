// prebroji broj zagrada i jesu li uparene (otvorena i zatvorena)

const message = "[]]sdf{}{[[]]]{a())}}]{}{AA}}{d";
let parantheses = 0;
let square = 0;
let curly = 0;

for (let i = 0; i < message.length; i++) {
  const char = message[i];

  switch (char) {
    case "(":
      parantheses++;
      continue;
    case ")":
      parantheses--;
      continue;
    case "[":
      square++;
      continue;
    case "]":
      square--;
      continue;
    case "{":
      curly++;
      continue;
    case "}":
      curly--;
      continue;
    default:
      console.log("Char is not a bracket");
  }
}

console.log(parantheses, square, curly);
