function relationToLuke(person) {
  switch (person) {
    case "Darth Vader":
      return "father";
    case "Leia":
      return "sister";
    case "Han":
      return "brother in law";
    case "R2D2":
      return "droid";

    default:
      return null;
  }
}

function createName(array) {
  return array.toString().replace(/\,/g, " ");
}

//const relation = relationToLuke("Han");

const relationObject = {
  "Darth Vader": "father",
  Leia: "sister",
  Han: "brother in law",
  R2D2: "droid",
};

const params = process.argv.slice(2);
const name = createName(params);
const relation = relationObject[name];

if (relation) {
  console.log(`Luke I am your ${relation}`);
} else {
  console.log("I don't know who I am");
}
