// tokped
// -- kendaraan, buku, pakaian, hp, skincare
// -- setiap barang punya nama,category, berat, deskripsi, warna, price, stock

// -- kendaraan jumlah roda, bahan bakar (listrik/bensin/solar), tahun
// -- buku penulis , penerbit,  jumlah_halaman
// -- pakaian ukuran, bahan (katun/spandex/wool) , merk
// -- hp processor, ram, storage
// -- skin care  jenis (anti aging/pelembab/sunscreen) , ukuran (ml) , expired (year)

// -- add to cart => apabila ada yang sama maka jumlahkan qtynya jika lebih maka ambil maxStock
// -- total belanja
// -- edit qty => tidak boleh melebihi stock
// -- hapus cart
// -- bayar () => pada saat bayar stock berkurang cart dihapus

// -- class product nama,category, berat, deskripsi, warna, price, stock
// -- kendaraan ext product jumlah roda, bahan bakar (listrik/bensin/solar), tahun
// -- buku ext product penulis , penerbit,  jumlah_halaman
// ...

// class tokped
// cart = []
// products =[]

// function
// -- add product
// -- add to cart => apabila ada yang sama maka jumlahkan qtynya jika lebih maka ambil maxStock ,
//  tambahin 1 key qty
// -- total belanja
// -- edit qty => tidak boleh melebihi stock
// -- hapus cart
// -- bayar () => pada saat bayar stock berkurang cart dihapus

// products = [ {
//     nama: "bedak micin",
//     stock : 10
// }]

// addToCart("bedak micin", 5)
// cari di array products yang nama productnya adalah 'bedak micin'

// ketemu? masukan ke dalam cart

// carts = [
// {
//     nama: "bedak micin",
//     stock : 10,
//     qty : 5
// }
// ]

class Products {
  description;
  warna;
  constructor(name, price, category, weight) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.weight = weight;
  }
}

class Kendaraan extends Products {
  constructor(name, price, category, weight, n_of_wheels, fuel, year) {
    super(name, price, category, weight);
    this.n_of_wheels = n_of_wheels;
    this.fuel = fuel;
    this.year = year;
  }
}

class Buku extends Products {
  constructor(name, price, category, weight, author, publisher, n_of_pages) {
    super(name, price, category, weight);
    this.author = author;
    this.publisher = publisher;
    this.n_of_pages = n_of_pages;
  }
}
class Pakaian extends Products {
  constructor(name, price, category, weight, size, bahan, merk) {
    super(name, price, category, weight);
    this.size = size;
    this.bahan = bahan;
    this.merk = merk;
  }
}
class HP extends Products {
  constructor(name, price, category, weight, processor, ram, storage) {
    super(name, price, category, weight);
    this.processor = processor;
    this.ram = ram;
    this.storage = storage;
  }
}
class Skincare extends Products {
  constructor(name, price, category, weight, jenis, ukuran, expired) {
    super(name, price, category, weight);
    this.jenis = jenis;
    this.ukuran = ukuran;
    this.expired = expired;
  }
}

class Tennant {
  container_products = [];
  constructor(name, postalcode) {
    this.name = name;
    this.postalcode = postalcode;
  }
  add_product(item, stock) {
    this.container_products.push({ item, stock });
  }
  show_all_product() {
    console.log(this.container_products);
  }

  updatestock(item, amount) {
    this.container_products[
      this.container_products.findIndex((val) => val.item == item)
    ].stock += amount;
  }

  checkstock(item) {
    return this.container_products[
      this.container_products.findIndex((val) => val.item == item)
    ].stock;
  }
}

class UserTransaction {
  #cart = [];
  constructor(Tennant) {
    this.tennant = Tennant;
  }

  add_to_cart(item, quantity) {
    let container = this.tennant.container_products;
    let index_item = this.#cart.findIndex((val) => val.item == item);
    let item_stock =
      container[container.findIndex((val) => val.item == item)].stock;
    //check stock product
    if (this.#cart.filter((val) => val.item == item).length) {
      if (quantity + this.#cart[index_item].quantity > item_stock) {
        this.#cart[index_item].quantity = item_stock;
      } else {
        //check item in cart -> update availability
        this.#cart[index_item].quantity += quantity; //adding quantity
      }
    } else {
      if (quantity > item_stock) quantity = item_stock;
      this.#cart.push({ item, quantity });
    }
  }

  edit_quantity(item, quantity) {
    this.#cart[this.#cart.findIndex((val) => val.item == item)].quantity =
      quantity;
  }

  show_cart() {
    console.log(this.#cart);
  }

  show_total_price() {
    return this.#cart.reduce(
      (acc, current) => acc + current.item.price * current.quantity,
      0
    );
  }

  delete_item_from_cart(item) {
    if (this.#cart.findIndex((val) => val.item == item) != -1) {
      this.#cart.splice(
        this.#cart[this.#cart.findIndex((val) => val.item == item)],
        1
      );
      console.log(item, `telah di hapus`);
    } else {
      console.log(item, `tidak ditemukan`);
    }
  }

  pay(number) {
    if (number > this.show_total_price()) {
      //update stock
      this.#cart.map((val) =>
        this.tennant.updatestock(val.item, -val.quantity)
      );
      console.log(
        "Lunas dengan kembalian Rp ",
        (number - this.show_total_price()).toLocaleString("id-ID") + ",00"
      );
      this.#cart.splice(0, this.#cart.length);
    }
  }
}

TokoBagus = new Tennant("Toko Bagus", 29432);

Motor_ferari_900cc = new Kendaraan(
  "Amsyong",
  500000000,
  "Motor",
  350,
  2,
  "Pertamax",
  2023
);

Buku_Anjos = new Buku(
  "Anjos",
  77700,
  "Buku Religi",
  200,
  "Dwiky",
  "Airlangga",
  201
);

Ayaayawae = new Skincare(
  "Ayaayawae",
  62000,
  "Skincare",
  200,
  "Anti aging",
  "200 ml",
  "2026-07"
);

Celana_panjang_Anehlo = new Pakaian(
  "Celana Panjang Anehlo",
  299000,
  "Trousers",
  1000,
  34,
  "Denim",
  "Anehlo"
);

IPUN14xx = new HP(
  "IPUN 14 Amateur",
  14000000,
  "Smartphone",
  475,
  "ARM64^2",
  32,
  512
);

TokoBagus.add_product(Celana_panjang_Anehlo, 20);
TokoBagus.add_product(Motor_ferari_900cc, 20);
TokoBagus.add_product(IPUN14xx, 10);
TokoBagus.add_product(Buku_Anjos, 1);
TokoBagus.add_product(Ayaayawae, 20);

trans1 = new UserTransaction(TokoBagus);
trans1.add_to_cart(Buku_Anjos, 2);
trans1.add_to_cart(Ayaayawae, 2);
trans1.delete_item_from_cart(Motor_ferari_900cc);
trans1.add_to_cart(IPUN14xx, 5);
trans1.edit_quantity(IPUN14xx, 7);
trans1.add_to_cart(IPUN14xx, 5);
trans1.add_to_cart(Motor_ferari_900cc, 1);
trans1.show_cart();

TokoBagus.updatestock(Buku_Anjos, 10);
TokoBagus.show_all_product();
console.log(
  `total: Rp`,
  trans1.show_total_price().toLocaleString("id-ID") + `,00`
);
trans1.pay(641000000);
trans1.show_cart();
