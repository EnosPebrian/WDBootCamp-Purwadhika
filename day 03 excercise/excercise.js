// ● Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ …
// ■ 9 x 10
let number = 9;
let limit = 10;
for (i = 1; i <= limit; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// ● Write a code to check whether a string is a palindrome or not.
let word = "anna";
let is_it_palindrome;
for (i = 0; i < word.length; i++) {
  if (word[i] == word[word.length - i - 1]) {
    // console.log(word[i], word[word.length - i - 1]);
    is_it_palindrome = 1;
    continue;
  } else {
    is_it_palindrome = 0;
    break;
  }
}
if (is_it_palindrome) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is NOT a palindrome`);
}

// ● Write a code to convert centimeter to kilometer.
let length_cm = 10000;
let length_km = length_cm / 100000;
console.log(`${length_cm} cm is equal to ${length_km} km`);

// ● Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,
let angka = 10000000000000.5555;
angka = angka.toFixed(2);

angka_format = "";
arr_angka = angka.toString().split(".");
jumlah_angka = arr_angka[0].length;
for (i = 0; i < jumlah_angka; i++) {
  angka_format = arr_angka[0][jumlah_angka - i - 1] + angka_format;
  if ((i + 1) % 3 == 0) {
    angka_format = "." + angka_format;
  }
}
angka_format = "Rp " + angka_format + "," + arr_angka[1];
console.log(angka_format);

angka_IDR = angka.replace(".", ",");
angka_IDR = angka_IDR.replace(/\d(?=(\d{3})+\,)/g, "$&.");
angka_IDR = "Rp ".concat(angka_IDR);
console.log(angka_IDR);

// ● Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”
let str = "Hello world";
let reference = "ell";
let new_str = str.replace(reference, "");
console.log(new_str);

// ● Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”
let input_word = "hello world, test this";
array_word = input_word.split(" ");
temp_word = "";
for (i = 0; i < array_word.length; i++) {
  the_word = array_word[i];
  the_word = the_word.replace(the_word[0], the_word[0].toUpperCase());
  //   console.log(the_word);
  temp_word = temp_word.concat(" ", the_word).trim();
}
console.log(temp_word);

// ● Write a code to reverse a string.
let a_string = "Hello World";
let reverse_string = "";
for (i = 0; i < a_string.length; i++) {
  reverse_string += a_string[a_string.length - i - 1];
}
console.log(reverse_string);
