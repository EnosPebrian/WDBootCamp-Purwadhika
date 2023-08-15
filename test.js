let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ab = arr.map((el) => Math.round(el));

console.log(`a`, ab);
console.log(arr);

let bb = arr.forEach((el) => Math.ceil(el));
console.log(`b`, bb);
console.log(arr);

let cc = arr.filter((el) => {
  el < 3;
});
console.log(`c`, cc);
console.log(arr);

console.log(`----------------------`);

let xx = "1234567";
let yy = "12,34,56,7";
let res = 0;
function compare(a, b) {
  console.log(a + b);
}
do {
  compare(xx.length, yy.length);
  xx += 3;
  //   console.log(xx);
} while (xx.length < yy.length);

console.log(`----------------------`);

var result = 20;
function a() {
  console.log(result);
}
function b() {
  var result = 30;
  c();
}
function c() {
  var result = 35;
  //   console.log(result);
  a();
}

b();
