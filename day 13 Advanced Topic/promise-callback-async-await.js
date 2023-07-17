function massage() {
  console.log("async");
}
function talk(i) {
  console.log("anything", i);
}

setTimeout(massage, 1);
for (i = 0; i < 10; i++) {
  talk(i);
}

let a = { 1: "aaaaaaaa" };
const tryPromise = new Promise((resolve, reject) => {
  let isError = false;
  if (isError) reject("Error");
  else resolve(a);
});

tryPromise
  .then((value) => console.log(value))
  .catch((err) => console.log(err))
  .finally(massage);

console.log(`---------------------\n`);

const promise = new Promise((resolve, reject) => {});

function ar_check(array) {
  let obj = new Object();
  for (i of array) {
    const promise = new Promise((resolve, reject) => {
      if (!(i % 2)) {
        resolve(i + " Genap");
        obj[i] = "Genap";
      } else {
        reject(i + " Ganjil");
        obj[i] = "Ganjil";
      }
    });
    promise
      .then((value) => console.log(value))
      .catch((err) => console.log(err))
      .finally(() => {
        console.log(obj);
      });
  }
}

arr1 = [1, 2, 3, 4, 5, 6, 6, 6];
ar_check(arr1);
