// ● Write a code to convert celsius to fahrenheit.
t_celcius = -20;
console.log((t_celcius * 9) / 5 + 32);

// ● Write a code to check whether the number is odd or even
number = 10;
if (number % 2 == 0) console.log("even");
else console.log("odd");

// ● Write a code to check whether the number is prime number or not
// number = a * b
random_number = 10;
if (random_number == 2) console.log(`${random_number} is a prime number`);
else if (random_number > 2) {
  for (i = 2; i < random_number / 2; i++) {
    var is_it_prime = 1;
    if (random_number % i == 0) {
      is_it_prime = 0;
      break;
    }
  }

  if (is_it_prime == 1) {
    //checking is it prime
    console.log(`${random_number} is a prime number`);
  } else console.log(`${random_number} is NOT a prime number`);
}

// ● Write a code to find the sum of the numbers 1 to N.
// ○ Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
n = 5;
total = 0;
for (i = 0; i <= n; i++) {
  total += i;
}
console.log(`jumlah 1 sampai ${n} = ${total}`);

// ● Write a code to find factorial of a number.
factorial = 5;
total = 0;
if (factorial == 0) total = 1;
for (i = factorial; i > 0; i--) {
  if (i == factorial) {
    total = factorial;
  } else {
    total = total * i;
  }
}
console.log(`${factorial}! = ${total}`);

// ● Write a code to print the first N fibonacci numbers
n_fibonacci = 15;
let number1 = 0;
let number2 = 1;
total = 0;
array = [];
for (let i = 0; i < n_fibonacci; i++) {
  if (i <= 1) {
    array.push(i);
  } else {
    array.push(array[i - 1] + array[i - 2]);
  }
}
console.log(array);

for (let i = 0; i < n_fibonacci; i++) {
  if (i <= 1) {
    console.log(i);
  } else if (i > 1) {
    console.log(number1 + number2);
    temp_number1 = number1;
    number1 = number2;
    number2 = temp_number1 + number2;
  }
}
