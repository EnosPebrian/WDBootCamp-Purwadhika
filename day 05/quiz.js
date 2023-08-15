function birthdayCakeCandles(candles) {
  // Write your code here
  return candles
    .sort((a, b) => a - b)
    .filter((val) => val == candles[candles.length - 1]).length;
}

candles = [4, 4, 5, 6, 7, 91, 8, 8, 6, 4, 8, 91, 9, 9, 9, 4, 4, 9];
console.log(candles.reverse());
// candles2 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 4, 5, 7, 8, 8, 1, 1, 4, 3];
// console.log(birthdayCakeCandles(candles));
// console.log(birthdayCakeCandles(candles2));

console.log("\n\n----------------------------------");
function stringConstruction(s) {
  // Write your code here
  let s_array = s.split("");
  unique_char = [];
  for (char of s_array) {
    unique_char.indexOf(char) == -1 ? unique_char.push(char) : null;
  }
  console.log(unique_char.length);
}

console.log(stringConstruction("abcd"));
console.log(stringConstruction("abab"));
console.log(stringConstruction("process"));
