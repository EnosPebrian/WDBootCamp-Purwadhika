class User {
  greeting() {
    console.log("hello World");
  }
}

const User2 = class {
  greeting() {
    console.log("hello World");
  }
};

const user3 = new User();
const user4 = new User2();
console.log(user3.greeting());
console.log(user4);

var Punch;
class Character {
  name = "";
  age = "";
  hobby = "";
  #level;
  #exp;
  #HP;
  #MP;
  #SP;

  constructor(name, age, hobby) {
    this.name = name;
    this.#level = 0;
    this.hobby = hobby;
    this.age = age;
    this.#exp = 0;
    this.skill = ["Punch"];
    this.#HP = 200;
    this.#MP = 100;
    this.#SP = 100;
  }
  emot1() {
    console.log("Let's go!");
  }
  attack(monster) {
    monster.HP - Punch;
  }
}

Player1 = new Character("Enos", 1, "mancing");
Player1.emot1();
console.log(Player1);

class User33 {
  #firstName = "udin";
  #lastName = "ujang";
  get fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  set fullName(value) {
    let split = value.split(" ");
    this.#firstName = split[0];
    this.#lastName = split[1];
  }
}

const user9 = new User33();
console.log(user9.fullName);
user9.fullName = "hehehe";
console.log(user9.fullName);
user9.fullName = "hehe hehe";
console.log(user9.fullName);

class Product {
  constructor(name, price) {
    this.productName = name;
    this.price = price;
  }
}

class Book extends Product {
  constructor(name, price, author) {
    super(name, price);
    this.author = author;
  }
}

book1 = new Book("One Piece", 200000, "Arro");

console.log(book1);
