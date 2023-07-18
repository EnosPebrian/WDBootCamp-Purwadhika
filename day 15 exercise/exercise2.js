// ● Write a code to find the longest common prefix string amongst an array of strings.
function longest_common_prefix(arrayofstring) {
  let map = new Map();
  let maxcount = -Infinity;
  let max = "";
  for (string of arrayofstring) {
    for (index in string) {
      if (index == 0) continue;
      prefix = string.slice(undefined, index);
      if (!map.has(prefix)) {
        map.set(prefix, 1);
      }
      number_of_prefix = arrayofstring.filter((str) =>
        str.match(prefix)
      ).length;

      if (number_of_prefix >= maxcount) {
        maxcount = number_of_prefix;
        max = prefix;
      }
    }
  }
  return max;
}

let arraystring = [
  `geeksforgeeks`,
  `geeks`,
  `geek`,
  `geezer`,
  `bab`,
  `ba`,
  `boo`,
  `bee`,
  `bii`,
];
// console.log(longest_common_prefix(arraystring));
arraystring = [`apple`, `ape`, `april`];
// console.log(longest_common_prefix(arraystring));

// ● Write a code that copies the first half of an array. With an odd number of array elements, the
// middle element should belong to the first half
function half_array(array) {
  if (array.length % 2) return array.slice(0, Math.ceil(array.length / 2));
  else return array.slice(0, array.length / 2);
}

let arra = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(half_array(arra));

arra = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(half_array(arra));

// ● Write a code to get the number of days in a month
// ○ Example : month = 1, year = 2022 → 31
function days_in_a_month(month, year) {
  nextmonth = month + 1;
  thismonth = new Date(year + `-` + month + `-01`);
  nextmonth = new Date(year + `-` + nextmonth + `-01`);
  selisih = nextmonth - thismonth;
  return selisih / (3600 * 1000 * 24);
}

days_in_a_month(2, 2020);
days_in_a_month(8, 2020);

// ● Write a code to count the number of days passed since beginning of the year
function days_ytd(time) {
  let year = time.getFullYear();
  let milisecs_time = time.getTime();
  let begining_of_year = new Date(year + `-01-01`).getTime();
  let selisih = milisecs_time - begining_of_year;
  return Math.floor(selisih / (3600 * 1000 * 24)) + 1;
}
// console.log(days_ytd(new Date()));

// ● Write a code to calculate age
function calculate_age(birthdate) {
  today = new Date();
  year = today.getFullYear() - birthdate.getFullYear();
  month = today.getMonth() - birthdate.getMonth();
  //   days = today.getDate() - birthdate.getDate();
  let a = String(year) + " years " + String(month) + ` months`; //+
  // String(days) +
  // ` days `;

  return a;
}

// console.log(calculate_age(new Date(`1999-02-25`)));

module.exports = {
  longest_common_prefix,
  half_array,
  days_in_a_month,
  days_ytd,
  calculate_age,
};
