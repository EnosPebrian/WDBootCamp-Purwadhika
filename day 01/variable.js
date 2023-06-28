let message; //declare variable message

message = "Kapal Laut"; // assign variable
console.log(message);

let message2 = "Kapal Karam"; //declare + assign
console.log(message2);

message2 = "Kapal Terbang"; //re-assign
console.log(message2);

var Globavariable = "Hello replaceable Global variable"; //bisa di re-assign and re-declare
let replaceable = "Hello replaceable variable"; //bisa re-assign, TIDAK BISA DI RE-DECLARE
const constant = "Hello constant variable"; //TIDAK BISA RE-ASSIGN DAN TIDAK BISA RE-DECLARE

console.log(Globavariable.slice(1, -5));
console.log(replaceable);
console.log(constant);

// let neee = 123;
// neee = null;
// console.log(neee, typeof neee);
// let contoh1 = "a";
// let contoh2 = contoh1;
// console.log(contoh1);
// console.log(contoh2);
// contoh1 = "b";
// console.log(contoh1);
// console.log(contoh2);

arr = [Globavariable, replaceable, constant];
console.log(arr);

console.log(Boolean(false));

const date = new Date();

console.log(date);

// let x = 1;
// x = -x;
// console.log(x);
