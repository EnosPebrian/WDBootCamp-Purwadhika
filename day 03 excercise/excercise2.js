// ● Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
example = "The QuiCk BrOwN Fox";
// console.log(example[0]);
swap_case = "";
let char;
for (i = 0; i < example.length; i++) {
  if (example[i] == example[i].toUpperCase()) {
    char = example[i].toLowerCase();
  } else {
    char = example[i].toUpperCase();
  }
  swap_case = swap_case.concat(char);
}
console.log(swap_case);

// ● Write a code to find the largest of two given integers
int1 = 11;
int2 = 22;
if (int1 < int2) {
  console.log(`${int2} is the largest`);
} else {
  `${int1} is the largest`;
}

// ● Write a conditional statement to sort three numbers (do
let a = 3;
let b = 5;
let c = 4;
if (a > b) {
  if (a > c) {
    if (b > c) {
      console.log(`a > b > c or (${a} > ${b} > ${c})`);
    } else if (b < c) {
      console.log(`a > c > b or (${a} > ${c} > ${b})`);
    }
  } else if (a < c) {
    console.log(`c > a > b or (${c} > ${a} > ${b})`);
  }
} else if (b > a) {
  if (b > c) {
    if (a > c) {
      console.log(`b > a > c or (${b} > ${a} > ${c})`);
    } else if (a < c) {
      console.log(`b > c > a or (${b} > ${c} > ${a})`);
    }
  } else if (b < c) {
    console.log(`c > b > a or (${c} > ${b} > ${c})`);
  }
}

// ● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
let input = "1000";
let type;
switch (typeof input) {
  case "string":
    type = 1;
    break;
  case "number":
    type = 2;
    break;
  case "bigint":
    type = 2;
    break;
  default:
    type = 3;
}
console.log(`${input} data type is ${type}`);

// ● Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
let word = "An apple a day keeps the doctor away";
let new_word = word.replace(/(A|a)/g, "*");
console.log(new_word);
