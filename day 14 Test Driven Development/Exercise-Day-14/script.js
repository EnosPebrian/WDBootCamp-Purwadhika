// Alert
alert("Welcome to My App");

// Prompt
const value = prompt("What is Your Name ?");
alert(`Welcome, ${value}!`);

// Confirm
const value2 = confirm("Are You Human ?");
if (value == true) {
  alert("Verified!");
} else {
  alert("Not Verified !");
}

main = async () => {
  let pilihan = true;
  while (pilihan) {
    // Pilih Menu
    pilihan = prompt(
      "Pilih Menu : \n1. Penjumlahan\n2. Pengurangan\n3. Pembagian\n4. Perkalian\n5. Pangkat 2\n6. Akar Pangkat 2\n7. Akar Pangkat 3"
    );

    if (pilihan == 1) {
      let num1 = prompt("Penjumlahan 2 angka.\nMasukan angka pertama: ");
      let num2 = prompt(
        `Penjumlahan 2 angka.\n Angka pertama anda: ${num1}. \nMasukan angka kedua: `
      );
      alert(`${num1} + ${num2} = ${penjumlahan(Number(num1), Number(num2))}`);
      let result = penjumlahan(Number(num1), Number(num2));
      document.getElementById("here").innerHTML = result;
    } else if (pilihan == 2) {
      let num1 = prompt("Pengurangan 2 angka.\nMasukan angka pertama: ");
      let num2 = prompt(
        `Pengurangan 2 angka.\n Angka pertama anda: ${num1}. \nMasukan angka kedua: `
      );
      alert(`${num1} - ${num2} = ${pengurangan(Number(num1), Number(num2))}`);
      let result = pengurangan(Number(num1), Number(num2));
      document.getElementById("here").innerHTML = result;
    } else if (pilihan == 3) {
      let num1 = prompt("Pembagian 2 angka.\nMasukan angka pertama: ");
      let num2 = prompt(
        `Pembagian 2 angka.\n Angka pertama anda: ${num1}. \nMasukan angka kedua: `
      );
      alert(`${num1} / ${num2} = ${pembagian(Number(num1), Number(num2))}`);
      let result = pembagian(Number(num1), Number(num2));
      document.getElementById("here").innerHTML = result;
    } else if (pilihan == 4) {
      let num1 = prompt("Perkalian 2 angka.\nMasukan angka pertama: ");
      let num2 = prompt(
        `Perkalian 2 angka.\n Angka pertama anda: ${num1}. \nMasukan angka kedua: `
      );
      alert(`${num1} x ${num2} = ${Perkalian(Number(num1), Number(num2))}`);
      let result = Perkalian(Number(num1), Number(num2));
      document.getElementById("here").innerHTML = result;
    } else if (pilihan == 5) {
      let num1 = prompt("Input a number: ");
      alert(`${num1} pangkat 2 = ${Pangkat_2(Number(num1))}`);
      let result = Pangkat_2(Number(num1));
      document.getElementById("here").innerHTML = result;
    } else if (pilihan == 6) {
      let num1 = prompt("Input a number: ");
      alert(`akar pangkat 2 dari ${num1} = ${akarPangkat2(Number(num1))}`);
      let result = akarPangkat2(Number(num1));
      document.getElementById("here").innerHTML = result;
    } else if (pilihan == 7) {
      let num1 = prompt("Input a number: ");
      alert(`akar pangkat 3 dari ${num1} = ${akarPangkat3(Number(num1))}`);
      let result = akarPangkat3(Number(num1));
      document.getElementById("here").innerHTML = result;
    } else if (pilihan == 8) {
      break;
    }
    //jeda 3 detik, baru lanjut while
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
};

// Function No 6
function penjumlahan(a = 0, b = 0) {
  return a + b;
}

function pengurangan(a = 0, b = 0) {
  return a - b;
}

function pembagian(a = 0, b = 0) {
  return a / b;
}

function Pangkat_2(a) {
  return a ** 2;
}

function Perkalian(a, b) {
  return a * b;
}

function akarPangkat2(a) {
  return Math.sqrt(a);
}

function akarPangkat3(a, b = 3) {
  return Math.pow(a, 1 / b);
}

main();
