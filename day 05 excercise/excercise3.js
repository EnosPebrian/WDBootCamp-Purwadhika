let arr = [1, "string", null, false, undefined, 2, "yes", undefined];

// 1. Based on the array above write a function that will return primitive data types only
console.log("------NOMOR 1-------");
function filter_primitive_data_type(array) {
  return array.filter(
    (val) =>
      typeof val === "string" ||
      typeof val === "number" ||
      typeof val === "undefined" ||
      typeof val === "boolean" ||
      typeof val === "null" ||
      typeof val === "bigint" ||
      typeof val === "symbol"
  );
}
console.log(filter_primitive_data_type(arr));

// 2. Write a function from a given array of numbers and return the second smallest number
console.log("\n\n------NOMOR 2-------");
number3 = [3, 4, 5, 6, 7, 8, 9, 10];
second_smallest_number = (array) => array.sort((a, b) => a - b)[1];
console.log(second_smallest_number(number3));

// 3. Write a function from a given array of mixed data types and return the sum of all the number
console.log("\n\n------NOMOR 3-------");
arr = ["a", "b", 10, 20, 40, 10, 50, 30, 10, 60, 10];
total = (array) => {
  return array
    .filter((val) => typeof val === "number")
    .reduce((acc, val) => acc + val, 0);
};

console.log(total(arr));

// 4. Write a function from the above array of number that will return sum of duplicate values
console.log("\n\n------NOMOR 4-------");
total_duplicates = (array) => {
  temp_array = array.filter((val) => typeof val === "number");
  let total = 0;
  for (num of temp_array) {
    tmp = temp_array.filter((val) => num == val);
    if (tmp.length > 1) total += num;
  }
  return total;
};
console.log(total_duplicates(arr));

// 5. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will
// randomly pick between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win
console.log("\n\n------NOMOR 5-------");
randbetween = (min, max) =>
  (Math.random() * (max + 0.5 - min - 0.5 + 1) + min - 0.5).toFixed(0);
//console.log(randbetween(1, 3)); // random from 0.5 to 3.5

function rock_paper_scissor(argument) {
  switch (randbetween(1, 3)) {
    case "1": //rock
      console.log("rock vs your", argument);
      switch (argument) {
        case "scissors":
          return console.log("YOU LOOSE");
        case "paper":
          return console.log("YOU WIN");
        default:
          return console.log("draw");
      }
    case "2": //paper
      console.log("paper vs your", argument);
      switch (argument) {
        case "rock":
          return console.log("YOU LOOSE");
        case "scissors":
          return console.log("YOU WIN");
        default:
          return console.log("draw");
      }
    case "3": //scissors
      console.log("scissors vs your", argument);
      switch (argument) {
        case "paper":
          return console.log("YOU LOOSE");
        case "rock":
          return console.log("YOU WIN");
        default:
          return console.log("draw");
      }
  }
}

for (i = 0; i < 10; i++) {
  rock_paper_scissor("rock");
}
