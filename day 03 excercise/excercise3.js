//segi 4
let row = 10;
let col = 10;
let str;
for (i = 0; i < row; i++) {
  str = "";
  for (j = 0; j < col; j++) {
    str += "*";
  }
  console.log(str);
}

console.log("\n");

//segitiga |\
for (i = 0; i < row; i++) {
  str = "";
  for (j = 0; j < i + 1; j++) {
    str += "*";
  }
  console.log(str);
}

console.log("\n");

//Segitiga \|
for (i = 0; i < row; i++) {
  str = "";
  for (j = 0; j < col; j++) {
    if (j >= i) {
      str += "*";
    } else {
      str += " ";
    }
  }
  console.log(str);
}

console.log("\n");

//segitiga /|
for (i = 0; i < row; i++) {
  str = "";
  for (j = row; j >= 0; j--) {
    if (j > i) {
      str += " ";
    } else {
      str += "*";
    }
  }
  console.log(str);
}

console.log("\n");

//segitiga /|
for (i = 0; i < row; i++) {
  str = "";
  for (j = row; j > i; j--) {
    str += "*";
  }
  console.log(str);
}

console.log("\n");

//segitiga /\

for (i = 0; i < row; i++) {
  str = "";
  for (j = col; j >= 0; j--) {
    if (j == i) {
      str += "*";
      break;
    } else {
      str += " ";
    }
  }
  for (n = 0; n < i; n++) {
    str += " *";
  }
  console.log(str);
}
