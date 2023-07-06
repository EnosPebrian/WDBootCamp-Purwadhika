// ● Create a function to calculate array of student data
// ● The object has this following properties :
// ○ Name → String
// ○ Email → String
// ○ Age → Date
// ○ Score → Number
// ● Parameters : array of student
// ● Return values :
// ○ Object with this following properties :
// ■ Score
// ● Highest
// ● Lowest
// ● Average
// ■ Age
// ● Highest
// ● Lowest
// ● Average
window.onload = () => {
  function summaryStudent(arrayofStudent) {
    let score = [];
    let age = [];
    arrayofStudent.map(({ Score }) => score.push(Score));
    arrayofStudent.map(({ Age }) => age.push(Age));
    highest_score = score.sort((a, b) => a - b)[score.length - 1];
    lowest_score = score[0];
    average_score = score.reduce((acc, val) => acc + val, 0) / score.length;
    highest_age = age.sort((a, b) => a - b)[age.length - 1];
    lowest_age = age[0];
    average_age = age.reduce((acc, val) => acc + val, 0) / age.length;
    return {
      Score: {
        Highest: highest_score,
        Lowest: lowest_score,
        Average: average_score,
      },
      Age: {
        Highest: highest_age,
        Lowest: lowest_age,
        Average: average_age,
      },
    };
  }

  let name = ["a", "b", "c", "d", "e"];
  let email = [
    "a@mail.com",
    "b@mail.com",
    "c@mail.com",
    "d@mail.com",
    "e@mail.com",
  ];
  let age = [17, 18, 19, 20, 21];
  let score = [90, 80, 70, 100, 60];

  student_array = [];
  for (i in name) {
    student_array.push({
      Name: name[i],
      Email: email[i],
      Age: age[i],
      Score: score[i],
    });
  }

  console.log(summaryStudent(student_array));

  // ● Create a program to create transaction
  // ● Product Class
  // ○ Properties
  // ■ Name
  // ■ Price
  // ● Transaction Class
  // ○ Properties
  // ■ Total
  // ■ Product
  // ● All product data
  // ● Qty
  // ○ Add to cart method → Add product to transaction
  // ○ Show total method → Show total current transaction
  // ○ Checkout method → Finalize transaction, return transaction data

  console.log("\n\n--------\n");
  class Product {
    constructor(name, price) {
      this.Name = name;
      this.Price = price;
    }
  }

  class Transaction {
    Total = 0;
    Products = { product: [], qty: [] };
    add_to_cart(item, quantity) {
      this.Products.product.push(item);
      this.Products.qty.push(quantity);
    }
    show_total() {
      let total = 0;
      for (let i in this.Products.product) {
        total += this.Products.product[i].Price * this.Products.qty[i];
      }
      console.log("RP ", total.toLocaleString("id-ID") + ",00");
      return total;
    }
    checkout() {
      const final = {};
      for (let i in this.Products.product) {
        let temp_i = Number(i) + 1;
        final["item" + temp_i] = {
          item: this.Products.product[i].Name,
          quantity: this.Products.qty[i],
          price_each: this.Products.product[i].Price,
          subtotal: this.Products.product[i].Price * this.Products.qty[i],
        };
        console.log(
          this.Products.qty[i],
          "\t",
          this.Products.product[i].Name,
          "\t= ",
          this.Products.product[i].Price * this.Products.qty[i]
        );
      }
      final["Grand Total"] =
        "RP " + this.show_total().toLocaleString("id-ID") + ",00";
      return final;
    }
  }

  TV = new Product("LG TV", 30000000);
  HP1 = new Product("Iphone 14 Pro", 22000000);
  Laptop1 = new Product("ASUS ROG STRIX", 16000000);
  Mobil = new Product("Nissan Teana", 300000000);

  Transact1 = new Transaction();
  Transact1.add_to_cart(Mobil, 1);
  Transact1.add_to_cart(HP1, 2);
  Transact1.show_total();
  document.getElementById("Checkout").innerHTML = JSON.stringify(
    Transact1.checkout(),
    null,
    "\n"
  );
};
