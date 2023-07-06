// Create a function to check if two objects are equal
console.log("----------NOMOR 1----------");
function are_theobjects_equal(obj1, obj2) {
  return JSON.stringify(ojb1) === JSON.stringify(obj2);
}

function are_obj_equal(obj1, obj2) {
  ar_obj1 = Object.entries(obj1).sort();
  ar_obj2 = Object.entries(obj2).sort();
  if (ar_obj1.length != ar_obj2.length) return "Not equal"; // kalo panjangnya ga sama, tidak equal
  for (i in ar_obj1) {
    if (ar_obj1[i][0] != ar_obj2[i][0] || ar_obj1[i][1] != ar_obj2[i][1])
      //check key dan value dari kedua array
      return "Not equal"; // kalo salah satu key atau value tidak sama setelah di-sort, not equal
  }
  return "Equal"; // kalo sama semua
}
let obj1 = { a: 1, b: 2, c: 3, d: 4 };
let obj2 = { a: 1, c: 3, d: 4, b: 2 };
let obj3 = { a: 4, c: 3, b: 2, d: 1 };

console.log(are_obj_equal(obj1, obj2));
console.log(are_obj_equal(obj1, obj3));
console.log(are_obj_equal(obj2, obj3));

// ● Create a function to get the intersection of two objects
// ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }
console.log("\n\n----------NOMOR 2----------");
let obj4 = { a: 1, b: 2, d: 4, e: 3, f: 1, G: 2 };
let obj5 = { a: 1, c: 3, d: 4, e: 5, f: 1, g: 2 };

function intersection(obj, obj2) {
  ar_obj4 = Object.entries(obj);
  ar_obj5 = Object.entries(obj2);
  array = ar_obj4.map(
    //return intersection value as is and unique value to undefined
    ([key, value]) =>
      ar_obj5.filter(([key1, value1]) => key1 == key && value1 == value)[0]
  );
  //remove undefined
  array = array.filter((val) => typeof val != "undefined");
  return Object.fromEntries(array);
}
console.log(intersection(obj4, obj5));

// ● Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example :
// ● Result :
// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]
console.log("\n\n----------NOMOR 3----------");
let array1 = [
  { name: `Student 1`, email: `student1@mail.com` },
  { name: `Student 2`, email: `student2@mail.com` },
];
let array2 = [
  { name: `Student 1`, email: `student1@mail.com` },
  { name: `Student 3`, email: `student3@mail.com` },
];
function merge_array(ar1, ar2) {
  let ArrayResult = [];
  temp_ar = ar1.concat(ar2);
  for (obj of temp_ar) {
    ArrayResult.filter(
      ({ name, email }) => name == obj.name && email == obj.email
    ).length
      ? null
      : ArrayResult.push(obj);
  }
  return ArrayResult;
}

console.log(merge_array(array1, array2));

// ● Create a function that can accept input as an array of objects and switch all values into
// property and property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]

// ● Create a function to find a factorial number using recursion
console.log("\n\n----------NOMOR 4----------");
function factorial(number) {
  let total = 1;
  if (number == 0 || number == 1) return total;
  function counter([number, total]) {
    if (number == 1) return total;
    return counter([number - 1, (total *= number)]);
  }
  return counter([number, total]);
}

console.log(factorial(5));
