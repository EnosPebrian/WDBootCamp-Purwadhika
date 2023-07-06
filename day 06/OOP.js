let obj1 = {};
let obj2 = new Object();

const student = {
  name: "ridwan",
  say: () => {
    console.log("hello");
  },
};
console.log(student.name);
student.say();

student.age = 17;
student.h;
console.log(student);

student["hoby"] = "mancing";

console.log(student);

const arrKeys = ["name", "age", "address"];
const arrValues = ["ridwan", "17", "batam"];
const person = {};

person[arrKeys[0]] = arrValues[0];
person[arrKeys[1]] = arrValues[1];
person[arrKeys[2]] = arrValues[2];

console.log(person);

const mobil = {
  name: "nissan",
  model: "rx-7",
  start: () => "mobil menyala",
};
console.log(mobil);

mobil.model = "cefiro"; //replace value di dalam key model
mobil.start = "hello";
console.log(mobil.length);

//optional chaining
console.log(mobil.mesin?.nama.depan);

//accessing keys
console.log(Object.keys(mobil));

test = { a: 123 };
test2 = test; //shallow copy
test3 = { ...test }; // deep copy

test2["a"] = 222;
console.log(test);
console.log(test3);

let person2 = {
  name: "udin",
  greet() {
    console.log(`hello ${this.name}`);
  },
};

person2.greet();

console.log("\n\n............................");

user6 = {
  firstName: "a",
  lastName: "b",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(values) {
    let split = values.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },
};

user6.fullName = "c";
console.log(user6.fullName);

console.log(user6);
