// 1. Write a function to get the lowest, highest and average value in the array (with and without sort
//     function).

// function summary(arr) {
//     aa
// }

function summary_sort(arr) {
  arr.sort((a, b) => b - a);
  console.log(arr);
  highest = arr[arr.length - 1];
  lowest = arr[0];
  avg = arr.reduce((total, curVal) => total + curVal, 0) / arr.length;
  return [highest, lowest, avg];
}

let arrNumb = [4, 3, 5, 6, 8, 9, 1, 3, 4, 6, 9, 1, 234, 16, 7, 7, 8, 99];
test = summary_sort(arrNumb);
console.log(...test);

// 2. Write a function that takes an array of words and returns a string by concatenating the words in
//    the array, separated by commas and - the last word - by an 'and'.

// 3. Write a function to split a string and convert it into an array of words
//    a. Example : “Hello World” → [“Hello”, “World”]
// 4. Write a function to calculate each element in the same position from two arrays of integer.
//    Assume both arrays are of the same length.
//    a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
// 5. Write a function that adds an element to the end of an array. However, the element should only
//    be added if it is not already in the array
