//menghitung biaya parkir
//kendaraan = mobil/motor
//mobil jam pertama 3000, jam berikutnya 2000
//motor jam pertama 2000, jam berikutnya 1000

//motor, 3 jam, total 4000

function calculate_parking_price(kendaraan, lamaparkir, tagihan) {
  if (kendaraan == "motor") perjam = 1000; //declare harga parkir perjam untuk MOTOR
  else if (kendaraan == "mobil") perjam = 2000; //declare harga parkir perjam untuk MOBIL
  for (let i = 1; i < lamaparkir; i++) { //loop calculating the price
    tagihan += perjam;
  }
  return tagihan;
}


kendaraan = "mobil"; //pilih kendaraan
let total_price; //declare initial price
let total_jam = 3; //get total jam

if (kendaraan == "motor") {
  total_price = 2000; //declare initial price for motor
  total_price = calculate_parking_price(kendaraan, total_jam, total_price);
  console.log(`Total price to pay = ${total_price}`);
}

else if (kendaraan == "mobil") {
  total_price = 3000; // declare initial price for mobil
  total_price = calculate_parking_price(kendaraan, total_jam, total_price);
  console.log(`Total price to pay = ${total_price}`);
}
