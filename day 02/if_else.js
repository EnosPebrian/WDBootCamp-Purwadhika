let age = 11; // =declare and assign

if (age >= 17) {
  //conditional
  console.log(`you can now create an id card`); //code block if true
} else {
  console.log("you are underage");
}

let result = 90;

if (result >= 90) {
  console.log("A");
} else if (result >= 80) {
  console.log("B");
} else if (result >= 70) {
  console.log("C");
} else if (result >= 60) {
  console.log("D");
} else {
  console.log("E");
}

let umur = 18;
let name = "udin";
let gender = "cowo";

// let bool1 = 3 > 2 < 1;
console.log(true && true);

//&& and
//|| or
//! not

if (umur == 17 && (name == "udn" || gender == "owo"))
  console.log("ini anak saya");
else {
  console.log("anakku bukan anakku");
}

const nilai = 76;

switch (nilai) {
  case "76":
    console.log("This is");
  case 76:
    console.log("That is");
  default:
    console.log("EEW");
}

// ternary operator
const str = "python";

console.log(
  str == "javascript"
    ? "javascript"
    : str == "python"
    ? "python"
    : "not a programming language"
);
