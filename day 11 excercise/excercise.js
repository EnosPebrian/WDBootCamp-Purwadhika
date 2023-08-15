// Create a function to convert Excel sheet column title to its corresponding column number.

function column_converter(column_charname) {
  if (column_charname.length == 1) return column_charname.charCodeAt(0) - 64;
  if (column_charname.length == 2)
    return (
      (column_charname.charCodeAt(0) - 64) * 26 +
      column_charname.charCodeAt(1) -
      64
    );
  if (column_charname.length == 3)
    return (
      (column_charname.charCodeAt(0) - 64) * 26 ** 2 +
      (column_charname.charCodeAt(1) - 64) * 26 +
      column_charname.charCodeAt(2) -
      64
    );

  // else {
  //     let number = 0
  //     for (i in array_char) {
  //         if array_char[i] == array_char[-1];
  //         number+= array_char[i].charCodeAt(0)-64
  //         else {number += (array_char[i].charCodeAt(0)-64)*26}
  //         return number
  //     }
}

console.log("\n-----------------NOMOR 1----------------\n");
console.log(column_converter("A"));
console.log(column_converter("Z"));
console.log(column_converter("AA"));
console.log(column_converter("ZZ"));
console.log(column_converter("AAA"));
console.log(column_converter("ZZZ"));

// Given a non-empty array of integers nums, every element appears twice except for one. Find
// that single one.
// ● You must implement a solution with a linear runtime complexity and use only constant extra
// space.
// ● Example 1:
// ○ Input: nums = [2,2,1]
// ○ Output: 1
// ● Example 2:
// ○ Input: nums = [4,1,2,1,2]
// ○ Output: 4
// ● Example 3:
// ○ Input: nums = [1]
// ○ Output: 1
console.log("\n-----------------NOMOR 2----------------\n");

function find_unique_integer(array_int) {
  let a_map = new Map();
  for (num of array_int) {
    if (a_map.has(num)) a_map.delete(num);
    else a_map.set(num, 1);
  }
  [firstKey] = a_map.keys();
  return firstKey;
}
let nums = [2, 2, 1];
console.log(find_unique_integer(nums));
nums = [4, 1, 2, 1, 2];
console.log(find_unique_integer(nums));
nums = [1];
console.log(find_unique_integer(nums));

// ● Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// ● Example 1:
// ○ Input: s = "anagram", t = "nagaram"
// ○ Output: true
// ● Example 2:
// ○ Input: s = "rat", t = "car"
// ○ Output: false
console.log("\n-----------------NOMOR 3----------------\n");
function is_anagram(str1, str2) {
  //bersihin coma dan spasi
  str1 = str1.toLowerCase().replace(/[^a-z]/gi, "");
  str2 = str2.toLowerCase().replace(/[^a-z]/gi, "");
  if (str1.length != str2.length) return false;
  if (str1.split("").sort().join("") != str2.split("").sort().join(""))
    return false;
  return true;
}

let s = "anagram";
let t = "nagaram";
console.log(is_anagram(s, t));
s = "rat";
t = "car";
console.log(is_anagram(s, t));
s = "She Sells Sanctuary";
t = "Satan; cruel, less shy";
console.log(is_anagram(s, t));

s = "rich-chosen goofy cult";
t = "Church of Scientology";
console.log(is_anagram(s, t));

// ● You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1
// or 2 steps. In how many distinct ways can you climb to the top?
// ● Example 1:
// ○ Input: n = 2
// ○ Output: 2
// ○ Explanation: There are two ways to climb to the top.
// ■ 1. 1 step + 1 step
// ■ 2. 2 steps
// ● Example 2:
// ○ Input: n = 3
// ○ Output: 3
// ○ Explanation: There are three ways to climb to the top.
// ■ 1. 1 step + 1 step + 1 step
// ■ 2. 1 step + 2 steps
// ■ 3. 2 steps + 1 step
console.log("\n-----------------NOMOR 4----------------\n");
// function ways_to_climb_staircase(n) {
//   let array = [1, 1];
//   if (n <= 1) return n;
//   if (n > 1) {
//     for (let i = 2; i <= n; i++) {
//       array.push(array[i - 1] + array[i - 2]);
//     }
//   }
//   return array[array.length - 1];
// }

function ways_to_climb_staircase(n) {
  let set = new Set();
  let temp = [];

  for (i = 0; i < n; i++) {
    temp.push(1);
  }
  set.add(temp);

  for (i = 1; i <= n / 2; i++) {
    temp = [];
    for (j = 0; j < i; j++) {
      temp.push(2);
    }
    for (j = temp.reduce((sum, curr) => sum + curr, 0); j < n; j++) {
      temp.push(1);
    }
    set.add(temp);
  }

  return set;
}

console.log(ways_to_climb_staircase(0));
console.log(ways_to_climb_staircase(1));
console.log(ways_to_climb_staircase(2));
console.log(ways_to_climb_staircase(3));
console.log(ways_to_climb_staircase(4));
console.log(ways_to_climb_staircase(5));
console.log(ways_to_climb_staircase(6));
console.log(ways_to_climb_staircase(7));

console.log(`\n-------------\n`);
function permute(input_array) {
  let arr = [];
  let temp_array = [...input_array];

  for (i = 0; i < input_array.length; i++) {
    a = temp_array.shift();
    temp_array.push(a);
    arr.push(temp_array);
  }

  for (i = 0; i < input_array.length; i++) {}
  return arr;
}

let set1 = new Set();
console.log(permute([2, 1, 1, 1, 1])[0] == permute([2, 1, 1, 1, 1])[0]);
