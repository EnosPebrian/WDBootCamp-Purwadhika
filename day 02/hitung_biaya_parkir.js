//menghitung biaya parkir
//kendaraan = mobil/motor
//mobil jam pertama 3000, jam berikutnya 2000
//motor jam pertama 2000, jam berikutnya 1000

//motor, 3 jam, total 4000

kendaraan = "mobil"; //pilih kendaraan

let total_price; //declare initial price
let total_jam = 3.5; //get total jam

if (kendaraan == "motor") {
  total_price = 2000; //declare initial price for motor
  if (total_jam <= 1)
    console.log(`Total price to pay = ${total_price}`); //parkir motor 1 jam
  else if (total_jam > 1) {
    for (i = 1; i < total_jam; i++) {
      total_price += 1000;
    }
    console.log(`Total price to pay = ${total_price}`);
  }
}

if (kendaraan == "mobil") {
  total_price = 3000; // declare initial price for mobil
  if (total_jam <= 1)
    console.log(`Total price to pay = ${total_price}`); //parkir motor 1 jam
  else if (total_jam > 1) {
    for (i = 1; i < total_jam; i++) {
      total_price += 2000;
    }
    console.log(`Total price to pay = ${total_price}`);
  }
}
