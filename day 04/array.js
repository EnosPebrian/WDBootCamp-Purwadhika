let arr = [];
arr = new Array(1, 2, 3, "a", "b");

console.log(arr);

let student1 = {
  name: "Budiono",
  email: "abc@gmail.com",
  citacita: "Kapal Laut",
  umur: 19,
};
let student2 = {
  name: "Santoso",
  email: "santoso@gmail.com",
  citacita: "Sekdes",
  umur: 56,
};

let arrObject = [student1, student2];

// console.log(arrObject);
// console.log(arrObject[0]);
let fruits = ["Apple", "Orange", "Plum"];

//looping array 1
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//looping for - of
for (let fruit of fruits) {
  console.log(fruit);
}

//looping for - in
for (let item in fruits) {
  console.log(fruits[item]);
}

let alphabet = "abcdefghijklmnopqrstuvwxyz";
arr_alphabet = alphabet.split("");
console.log(arr);

for (let char of arr_alphabet) {
  console.log(char);
}

console.log(arr_alphabet.toString().replace(/,/, " "));
console.log(arr_alphabet.join(" dan "));

// build in method array
// toString;
// join;
// pop;
// push;
// shift;
// unshift;
// concat; menggabungkan array dengan array lain
console.log(arr.concat(arr_alphabet));

// arr.concat(arr_alphabet).map((val, index) => console.log(val, index));

buah = ["strawberry", "orange", "apple", "grape", "Apple", "Orange"];
console.log(buah.sort());
console.log(buah.reverse());
a = buah.indexOf("strawberry");
console.log(buah.splice(a, 1));
console.log(buah.splice(a, 0, "durian", "watermelon"));
console.log(buah.splice(buah.indexOf("grape"), 0, "tomato"));
console.log(buah);

for (fruit in buah) {
  console.log(buah[fruit]);
}

for (item of buah) {
  console.log(item);
}
