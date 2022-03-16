function userFactory(name, className, grade) {
  return {
    name,
    className,
    grade,
    hasPassed: function () {
      if (this.grade > 2) {
        return true;
      }
    },
  };
}

const user = userFactory("Gospodin Bik", "Javascript", 3);

// const name = user.name;
// const className = user.className;
// const rest = {user.grade,hasPassed: user.hasPassed};

// const { name, className, ...rest } = user;

function writeName(user) {
  //const { name = "This user has no name!" } = user || {name: undefined};
  const { name = "This user has no name!" } = user || {};

  console.log(name);
}

const user1 = userFactory("Goluban", "HTML", 1);
const user2 = userFactory("Bik Bodac", "CSS", 5);
const user3 = null;

// const { name: name1 } = user1;
// const { name: name2 } = user2;
// const { name: name3 } = user3;

writeName(user1);
writeName(user2);
writeName(user3);

const array = ["Goluban", "HTML", 1];
const [ime, ...rest] = ["Goluban", "HTML", 1];

const ime = array[0];
const rest = array.slice(1);

console.log({ ime, className, grade });
