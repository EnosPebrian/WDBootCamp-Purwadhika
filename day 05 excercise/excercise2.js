// 1. Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
console.log("------NOMOR 1-------");
number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
genap = (array) => array.filter((val) => !(val % 2));
console.log(genap(number1));

// 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size
// input. The array can only have a maximum size from a given input. (if the maximum size of the given
// input is 5 than the array can only contain 5 elements).
// a. Example: maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// i. The function will return [5, 10, 24, 3, 6]
console.log("\n\n------NOMOR 2-------");
function maxSize(int) {
  let max = int;
  return function int_to_array(...inte) {
    temp_array = new Array(...inte);
    temp_array = temp_array.slice(0, max);
    return temp_array;
  };
}

console.log(maxSize(5)(5, 10, 24, 3, 6, 7, 8));

// 3. Write a function that will combine 2 given array into one array
console.log("\n\n------NOMOR 3-------");
let ar1 = [1, 2, 3, 5, 6, "a", "b"];
let ar2 = [2, 3, 4, 5, 6, "a", "c"];
array_combiner = (array1, array2) => array1.concat(array2);
console.log("new array", array_combiner(ar1, ar2));

// 4. Write a function to find duplicate values in an array
console.log("\n\n------NOMOR 4-------");
function find_duplicate(array) {
  let counter = 0;
  let duplicatees = [];
  let unique = [];
  for (i in array) {
    if (duplicatees.find((val) => val == array[i])) continue;
    temp_filter = array.filter((val, index) => val == array[i]);
    temp_filter.length >= 2
      ? duplicatees.push({ value: array[i], index: i })
      : unique.push(array[i]);
  }
  console.log(duplicatees);
  return duplicatees;
}

duplicate_test = ["duplicate1", 1, 2, 3, 4, 5, 6, 1, 6, "duplicate1"];
find_duplicate(duplicate_test);
console.log("\n\n------NOMOR 5-------");
// 5. Write a function to find the difference in 2 given array

function difference(ar1, ar2) {
  let unique = [];
  let intersection = [];
  for (array of [ar1, ar2]) {
    for (item of array) {
      ar2.find((val, index) => val == item)
        ? intersection.push(item)
        : unique.push({ array1: item });
      // :  unique.push(item);
      ar1.find((val, index) => val == item)
        ? intersection.push(item)
        : unique.push({ array2: item });
      // :  unique.push(item);
    }
  }
  console.log("array: ", ar1, ar2);
  console.log("result: ", unique);
  return unique;
}

difference(ar1, ar2);
