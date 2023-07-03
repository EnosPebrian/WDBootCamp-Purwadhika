//function declaration
function square_convert(number) {
  if (number % 2 == 0) return number * 1000;
  return number * number;
}

console.log(square_convert(2));
console.log(square_convert(3));

//func expression
const greetings = function (location) {
  let welcome = "Welcome to Purwadhika";
  console.log(welcome, location);
};

console.log(greetings("batam"));

const panggil = function (name = "Budiono", citacita = "Kapal Laut") {
  console.log(`Nama saya`, name, "cita-cita saya", citacita);
};

panggil();

// rest parameter
function myFunc(a, b, ...many) {
  console.log(a);
  console.log(b);
  console.log(many);
}

myFunc("a", "b", "c", "d");

multi2 = (numb1, numb2) => numb1 * numb2;
console.log(multi2(3, 4));

//nested function
function sayHello() {
  function say() {
    return "say";
  }

  function hello() {
    return "hello";
  }
  return say() + " " + hello();
}
console.log(sayHello());

//closure
const greeting = (name) => {
  const defaultMsg = "Hello";
  return function () {
    return defaultMsg + " " + name;
  };
};

console.log(greeting("opa")());

function countdown(fromNumber) {
  console.log(fromNumber);
  let nextNumber = fromNumber - 1;
  if (nextNumber > 0) {
    countdown(nextNumber);
  }
}

countdown(10);

function kumpulan(arr) {
  if (arr % 2 == 0) return "genap";
  else return "ganjil";
}

arrNumber = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

newArr = arrNumber.map((value) => kumpulan(value));

genap = arrNumber.map((val) => {
  if (val % 2 == 0) return "genap";
  else return "ganjil";
});

console.log(genap);
console.log(newArr);

function check_genap(arr) {
  return arr.map((val) => (val % 2 == 0 ? "Genap" : "Ganjil"));
}

console.log(check_genap(arrNumber));
