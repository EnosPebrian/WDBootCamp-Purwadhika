// ● Given an array nums of size n, return the majority element. The majority element is the element
// that appears more than ⌊n / ù⌋ times. You may assume that the majority element always exists
// in the array.
// ● Example 1:
// ○ Input: nums = [ú,ù,ú]
// ○ Output: ú
// ● Example 2:
// ○ Input: nums = [ù,ù,ø,ø,ø,ù,ù]
// ○ Output: ù
console.log("\n-----------------NOMOR 1----------------\n");
function Majority(arr) {
  let map = new Map();
  for (num of arr) {
    if (map.get(num) == undefined) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }
  console.log(map);
  temp = [map.keys()].reduce((a, b) => (map.get(a) > map.get(b) ? a : b));
  return [...temp][0];
}

let nums = [3, 2, 3];
console.log(Majority(nums));

nums = [2, 2, 1, 1, 1, 2, 2, 1];
console.log(Majority(nums));

// ● Create a function to convert roman numeral to integer.
// ● Example 1:
// ○ Input: s = "III”
// ○ Output: ú
// ○ Explanation: III = ú.
// ● Example 2:
// ○ Input: s = "LVIII"
// ○ Output: üÿ
// ○ Explanation: L = ü÷, V= ü, III = ú.
// ● Example 3:
// ○ Input: s = "MCMXCIV"
// ○ Output: øĀĀû
// ○ Explanation: M = ø÷÷÷, CM = Ā÷÷, XC = Ā÷ and IV = û.
console.log("\n-----------------NOMOR 2----------------\n");

function roman_numeral_converter(s) {
  let years = 0;
  s = s.toUpperCase();
  let number_dict = {
    CM: 900,
    CD: 400,
    XC: 90,
    XL: 40,
    IX: 9,
    IV: 4,
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let temp_s;
  let special_notation = ["CM", "CD", "XC", "XL", "IX", "IV"];
  for (item of special_notation) {
    temp_s = s.split(item);
    if (temp_s.length > 1) {
      years += number_dict[item];
      for (index in temp_s[0]) {
        years += number_dict[temp_s[0][index]];
      }
      s = temp_s[1];
    } else {
      s = temp_s[0];
    }
  }
  if (s.length > 0) {
    for (index in s) {
      years += number_dict[s[index]];
    }
  }
  return years;
}

let s = "III";
console.log(roman_numeral_converter(s));
s = "LVIII";
console.log(roman_numeral_converter(s));
s = "MCMXCIV";
console.log(roman_numeral_converter(s));
s = "MMMXCIV";
console.log(roman_numeral_converter(s));
s = "MCMLXXXIV";
console.log(roman_numeral_converter(s));

// ● Given an integer numRows, return the first numRows of
// Pascal's triangle.
// ● In Pascal's triangle, each number is the sum of the two
// numbers directly above it as shown →
// ● Example 1:
// ○ Input: numRows = ü
// ○ Output: [[ø],[ø,ø],[ø,ù,ø],[ø,ú,ú,ø],[ø,û,ý,û,ø]]
// ● Example 2:
// ○ Input: numRows = ø
// ○ Output: [[ø]]
console.log("\n-----------------NOMOR 3----------------\n");

function Pascal_triangle(nrows) {
  let pascal_array = [];
  let temp = [];
  for (let i = 1; i <= nrows; i++) {
    temp = [];
    if (i == 1) {
      pascal_array.push([1]);
    }
    if (i > 1) {
      for (let j = 1; j <= i; j++) {
        if (j == 1 || j == i) {
          temp.push(1);
        } else {
          //   console.log(`here`, pascal_array[i - 2], `i`, i - 1);
          num = pascal_array[i - 2][j - 2] + pascal_array[i - 2][j - 1];
          temp.push(num);
        }
      }
      pascal_array.push(temp);
    }
  }
  return pascal_array;
}
// console.log(Pascal_triangle(1));
// console.log(Pascal_triangle(2));
// console.log(Pascal_triangle(3));
// console.log(Pascal_triangle(4));
// console.log(Pascal_triangle(5));
// console.log(Pascal_triangle(6));

// ● You are given an array prices where prices[i] is the price of a given stock on the ith day.
// ● You want to maximize your profit by choosing a single day to buy one stock and choosing a
// different day in the future to sell that stock.
// ● Return the maximum profit you can achieve from this transaction. If you cannot achieve any
// profit, return ÷.
// ● Example 1:
// ○ Input: prices = [þ,ø,ü,ú,ý,û]
// ○ Output: ü
// ○ Explanation: Buy on day ù (price = ø) and sell on day ü (price = ý), profit = ý-ø = ü.
// ○ Note that buying on day ù and selling on day ø is not allowed because you must buy before you sell.
// ● Example 2:
// ○ Input: prices = [þ,ý,û,ú,ø]
// ○ Output: ÷
// ○ Explanation: In this case, no transactions are done and the max profit = ÷.
console.log("\n-----------------NOMOR 4----------------\n");
function Maximumprofit(arrayofprices) {
  let profit = 0;
  for (i = 0; i < arrayofprices.length; i++) {
    for (j = i + 1; j < arrayofprices.length; j++) {
      temp_profit = arrayofprices[j] - arrayofprices[i];
      temp_profit > profit ? (profit = temp_profit) : null;
    }
  }
  return profit;
}

// let prices = [7, 1, 5, 3, 6, 4];
// console.log(Maximumprofit(prices));

// prices = [7, 6, 4, 3, 1];
// console.log(Maximumprofit(prices));
