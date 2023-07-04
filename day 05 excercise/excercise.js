// 1. Write a function to get the lowest, highest and average value in the array (with and without sort
//     function).

console.log("NOMOR 1");
function summary(arr) {
  let highest;
  let lowest;
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (i == 0) {
      highest = arr[i];
      lowest = arr[i];
    }
    if (arr[i] > highest) highest = arr[i];
    if (arr[i] < lowest) lowest = arr[i];
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return [highest, lowest, avg];
}

function summary_sort(arr) {
  arr.sort((a, b) => a - b);
  let highest = arr[arr.length - 1];
  let lowest = arr[0];
  let avg = arr.reduce((total, curVal) => total + curVal, 0) / arr.length;
  return [highest, lowest, avg];
}

let arrNumb = [4, 3, 5, 6, 8, 9, 1, 3, 4, 6, 9, 1, 234, 16, 7, 7, 8, 99];
test = summary_sort(arrNumb);
test1 = summary(arrNumb);
console.log(...test);
console.log(...test1);

console.log("\n\nNOMOR2");
// 2. Write a function that takes an array of words and returns a string by concatenating the words in
//    the array, separated by commas and - the last word - by an 'and'.
function stringconcat(arrayofwords) {
  let words = "";
  for (i = 0; i < arrayofwords.length; i++) {
    if (i == arrayofwords.length - 1) {
      words = words + "and" + arrayofwords[i];
    } else {
      words = words + arrayofwords[i] + ",";
    }
  }
  console.log(words);
  return words;
}

let wordtest =
  "Write a function that takes an array of words and returns a string by concatenating the words in".split(
    " "
  );
console.log(wordtest);
stringconcat(wordtest);

console.log("\n\nNOMOR 3");
// 3. Write a function to split a string and convert it into an array of words
//    a. Example : “Hello World” → [“Hello”, “World”]
string_splitter = (string) => string.split(" ");
console.log(
  string_splitter(
    "Write a function to split a string and convert it into an array of words"
  )
);

console.log("\n\nNOMOR 4-------------------");
// 4. Write a function to calculate each element in the same position from two arrays of integer.
//    Assume both arrays are of the same length.
//    a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
adding_two_arrays = (array1, array2) =>
  array1.map((val, index) => val + array2[index]);
console.log(adding_two_arrays([1, 2, 3], [3, 2, 1]));

console.log("\n\nNOMOR5-----------");
// 5. Write a function that adds an element to the end of an array. However, the element should only
//    be added if it is not already in the array
append_unique_element = function (element, array) {
  if (!array.find((ele) => ele == element)) array.push(element);
  return array;
};

let testword =
  "Write a function that adds an element to the end of an array".split(" ");
console.log(append_unique_element("adds", testword));
console.log(append_unique_element("addaaaaaaaaaaaaaa", testword));
