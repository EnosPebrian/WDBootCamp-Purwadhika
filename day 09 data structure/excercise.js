//buat program order goFood
// food => { name : "capcay" , price : 50000, qty : 2 }
// pada saat menambahkan makanan yang sama , maka qty akan diupdate
// apabila makanan yg ditambah belum ada di cart maka push
// restoran => { name : "kwetiaw 99", jarak : 5 }
// 1/km harga ongkir adalah 2000
//berapa total pricenya ?

// buat 4 function
// 1. hitung total biaya
// 2. addFood menambahkan makanan ke cart
// 3. menghapus makanan di cart
// 4. mengedit qty makanan tertentu di dalam cart

// let cart = [];
// addFood => menambahkan isi array cart

class Food {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.qty;
  }
}

class Transcation {
  #cart = [];

  constructor(tennant) {
    this.tennant = tennant;
  }

  add_to_cart(item, qty) {
    //check if item is available in cart, if it is, then update quantity;
    if (this.#cart.findIndex((val) => val == item) != -1) {
      item.qty += qty;
    } else {
      item.qty = qty;
      this.#cart.push(item);
    }
  }

  totalbiaya() {
    let foodprice = 0;
    // for (let item of this.#cart) {
    //   foodprice += item.price * item.qty;
    // }
    foodprice = this.#cart.reduce(
      (accumulator, current) => accumulator + current.price * current.qty,
      0
    );
    let distanceprice = this.tennant.distance * 2000;
    return foodprice + distanceprice;
  }

  removeitem(item) {
    this.#cart.splice(this.#cart.indexOf(item), 1);
  }

  edit_qty(foodname, qty) {
    this.#cart.find((foodinstance) => foodinstance == foodname).qty = qty;
  }

  see_cart() {
    return this.#cart;
  }
}

class Restaurant {
  constructor(name, distance) {
    this.name = name;
    this.distance = distance;
  }
}

Kwetiaw99 = new Restaurant("Kwetiaw 99", 5);
capcay = new Food("capcay", 50000);
nasigoreng = new Food("nasi goreng", 33000);
sate = new Food("sate", 41000);

const Transaction1 = new Transcation(Kwetiaw99);

Transaction1.add_to_cart(capcay, 3);
Transaction1.add_to_cart(capcay, 1);
console.log(Transaction1.see_cart());
Transaction1.add_to_cart(nasigoreng, 2);
// Transaction1.removeitem(nasigoreng);
Transaction1.add_to_cart(sate, 2);
Transaction1.edit_qty(capcay, 5);
console.log(Transaction1.see_cart());
console.log(Transaction1.totalbiaya());
