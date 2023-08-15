// ● Write a code to check whether the date is a weekend.
function isWeekend(time) {
  //convert time to milisecond
  // let milisecond = time.getTime();
  // let first_saturday = 3600 * 1000 * 24 * 2;
  // console.log(first_saturday.getDate());
  // let end_of_sunday = 3600 * 1000 * 24 * 4;
  // let a_week = 3600 * 1000 * 24 * 7;
  // // console.log(milisecond, first_saturday, end_of_sunday);
  // //find the remainder with the first weekend (saturday 00:00 am)
  // remainder = milisecond % a_week;
  // console.log(
  //   `time`,
  //   time.getDate(),
  //   `remainder`,
  //   remainder,
  //   `first sat`,
  //   first_saturday
  // );
  // //the remainder has to be less than the first saturday 00:00am to sunday 11:59 pm
  // if (remainder > first_saturday && remainder < end_of_sunday) return true;
  // else return false;
  if (time.getDay() == 6 || time.getDay() == 0) return true;
  else return false;
}
// console.log(isWeekend(new Date(`2023-07-14`)));
// console.log(isWeekend(new Date(`2023-07-15T01:00:02`)));
// console.log(isWeekend(new Date(`2023-07-16`)));
// console.log(isWeekend(new Date(`2023-07-17`)));
// console.log(isWeekend(new Date(`2023-07-18`)));

// ● Write a code to find GCD of two numbers → use while.
function find_GCD(number1, number2) {
  let GCD = 1;
  let i = 2;
  function is_prime(number) {
    if (number <= 1) return false;
    else if (number == 2) return true;
    else if (number > 2) {
      for (let i = 3; i <= number / 2; i++) {
        if (number % (i / 2) == 0) {
          return false;
        }
      }
      return true;
    }
  }
  while (number1 > 1 && number2 > 1) {
    if (!is_prime(i)) {
      i++;
      continue;
    }
    if (number1 % i == 0 && number2 % i == 0) {
      GCD *= i;
    }
    if (number1 % i == 0) {
      number1 = number1 / i;
    }
    if (number2 % i == 0) {
      number2 = number2 / i;
    }
    if (number1 % i == 0 || number2 % i == 0) {
      continue;
    } else i++;
  }
  return GCD;
}

// ● Write a code to find LCM of two numbers → use do … while.
function find_LCM(number1, number2) {
  if (number1 == number2) return number1;
  let initial_number1 = number1;
  let initial_number2 = number2;
  do {
    number1 < number2 ? (number1 += initial_number1) : null;
    number2 < number1 ? (number2 += initial_number2) : null;
  } while (number1 != number2);
  return number1;
}

// console.log(find_LCM(2, 3));

// ● Write a code to find most common character from a string
function most_common_char(string) {
  let map = new Map();
  string = string.replace(/[^a-z]/g, "").toLowerCase();
  let s = string.split("");
  for (char of s) {
    if (!map.has(char)) {
      map.set(char, 0);
    }
    map.set(char, map.get(char) + 1);
  }
  temp_array = [...map.entries()].sort((a, b) => a[1] - b[1]);
  max = temp_array[temp_array.length - 1];
  return max[0];
}
// console.log(
//   most_common_char(
//     `Write a code to find most common character from a string aaaaaaaaaaa`
//   )
// );

// ● Write a code to sort a string alphabetically (with and without sort function)
function sorting(string) {
  let str = string.replace(/[^a-z]/g, "");
  let sorted = str.split("");
  let min = Infinity;
  let compile = sorted.join("");
  while (true) {
    for (i = 0; i < sorted.length - 1; i++) {
      if (sorted[i].charCodeAt(0) > sorted[i + 1].charCodeAt(0)) {
        temp = sorted[i];
        sorted[i] = sorted[i + 1];
        sorted[i + 1] = temp;
      }
    }
    if (compile == sorted.join("")) break;
    compile = sorted.join("");
  }

  return compile;
}

function sort_withsort(string) {
  //remove the non-alphabet
  string = string.replace(/[^a-z]/g, "");
  sorted = string.split("").sort();
  return sorted.join("");
}
// console.log(
//   sorting(
//     "Write a code to sort a string alphabetically (with and without sort function)"
//   )
// );
// console.log(
//   sort_withsort(
//     "Write a code to sort a string alphabetically (with and without sort function)"
//   )
// );

// ● Write a code to get minimum date from array of dates.
function minimum_date(arrayofdates) {
  //pass
  arrayofdates.sort((a, b) => a.getTime() - b.getTime());
  return new Date(arrayofdates[0]);
}
dates = [
  new Date(`2023-07-14`),
  new Date(`2022-07-14`),
  new Date(`2021-07-14`),
  new Date(`2023-07-13`),
  new Date(`2023-07-12`),
];
// console.log(minimum_date(dates));

// ● Write a code that calculates the sum of all elements of a two-dimensional array
function sum_two_dimensional_array(array) {
  let sum = 0;
  for (item of array) {
    for (number of item) {
      sum += number;
    }
  }
  return sum;
}
// console.log(
//   sum_two_dimensional_array([
//     [1, 6],
//     [2, 7],
//     [3, 8],
//     [4, 9],
//     [2, 6],
//   ])
// );

module.exports = {
  isWeekend,
  find_GCD,
  find_LCM,
  most_common_char,
  sorting,
  sort_withsort,
  minimum_date,
  sum_two_dimensional_array,
};
