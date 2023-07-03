//////////////////////EXERCISE 1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function triangle(height) {
  let counter = 0;
  for (i = 0; i < height; i++) {
    str = "";

    for (j = 0; j <= i; j++) {
      counter++;
      temp_str = counter.toString();
      if (temp_str.length == 1) temp_str = temp_str.replace(/./g, "0$&");
      str += temp_str.toString();
      str += " ";
    }

    console.log(str);
  }
}

let height = 4;
triangle(height);
triangle(10);

//////////////////////EXERCISE 2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function recur(numberofloop) {
  for (i = 0; i < numberofloop; i++) {
    if (i == 0) console.log(0);
    else if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}

recur(40);

function BMI(weight, height) {
  index = weight / height ** 2;
  if (index < 18.5) a = "less weight";
  else if (18.5 <= index && index <= 24.9) a = "ideal";
  else if (25.0 <= index && index <= 29.9) a = "overweight";
  else if (30.0 <= index && index <= 39.9) a = "very overweight";
  else if (index > 39.9) a = "obesity";
  return a;
}

console.log(BMI(83.5, 1.7));

//////////////////////EXERCISE 4\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Write a function to remove all odd numbers in an array and return a new array that contains
// even numbers only

numbArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function checkGenap(val) {
  return val % 2 == 0;
}

function removeGanjil(arr) {
  return arr.filter(checkGenap);
}

function removeGenap(arr) {
  return arr.filter((val) => val % 2 != 0);
}

ganjil = removeGenap(numbArray);
genap = removeGanjil(numbArray);

console.log(ganjil);
console.log(genap);

//////////////////////EXERCISE 5\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]
function string_splitter(string) {
  a = string.split(" ");
  console.log(a);
  return a;
}

text_array = string_splitter(
  "Write a function to split a string and convert it into an array of words"
);

console.log(text_array);
