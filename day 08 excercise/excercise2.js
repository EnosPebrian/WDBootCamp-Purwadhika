// ● Specifications :
// ○ Create a shooting game between two player
// ○ Each player has three properties : name, health and power
// ○ Each player will take turns to shooting
// ○ Before shooting, players get a chance to get random items (health +10 or power +10)
// ○ The game will continue until one of the players has health < 0
// ● Requirements :
// ○ Create ShootingGame & Player class
// ○ ShootingGame class :
// ■ constructor(player1, player2) → player objects as a parameter
// ■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
// ■ start() → start shooting games
// ○ Player class :
// ■ Property → name, health (default 100), power (default 10)
// ■ hit(power) → subtract player health
// ■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
// ■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
// ○ ShootingGame start() function flow :
// ■ In every turn :
// ● Show each player status before shooting
// ● Get random item for each player before shooting
// ● Show each player status after shooting
// ■ Show winner name
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class Player {
  health = 100;
  power = 10;
  constructor(name) {
    this.name = name;
  }
  hit(power) {
    //subtract player health
    this.health -= power;
  }
  useItem(item) {
    //apply item to player (increase health or power, based on result from getRandomItem())
    this.health += item["health"];
    this.power += item["power"];
  }
  showStatus() {
    console.log(`${this.name} (Health: ${this.health}, Power: ${this.power})`);
  }
}

class Shooting_game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
  getRandomItem() {
    return {
      health: Math.round(Math.random() * 10),
      power: Math.round(Math.random() * 2),
    };
  }
  start() {
    this.player1.showStatus();
    this.player2.showStatus();
    while (true) {
      sleep(5000);
      console.log(this.player2.name, "turn");
      this.player1.useItem(this.getRandomItem());
      console.log(this.player1.name, "use item");
      this.player1.showStatus();
      this.player2.hit(this.player1.power);
      sleep(5000);
      console.log(this.player1.name, "hit", this.player2.name);
      this.player2.showStatus();
      if (this.player2.health <= 0) {
        console.log(this.player1.name, "-----------WIN------------");
        return this.player1;
      }
      sleep(5000);
      console.log(this.player2.name, "turn");
      console.log(this.player2.name, "use item");
      this.player2.useItem(this.getRandomItem());
      this.player2.showStatus();
      this.player1.hit(this.player2.power);
      sleep(5000);
      console.log(this.player2.name, "hit", this.player1.name);
      this.player1.showStatus();
      if (this.player1.health <= 0) {
        console.log(this.player2.name, "-----------WIN------------");
        return this.player2;
      }
    }
  }
}

Jajang = new Player("Jajang");
console.log(Jajang.name);
Myeon = new Player("Myeon");
console.log(Myeon.name);
game1 = new Shooting_game(Jajang, Myeon);

game1.start();
