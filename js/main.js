// let Player = {
//   init: function (name, race, health) {
//     this.name = name;
//     this.race = race;
//     this.health = health;
//   },
//
//   announce: function () {
//     let description = "This is " + this.name + ". He's a(n) " + this.race + " and has " + this.health + " health.";
//     return description;
//   },
// }
//
// let playerOne = Object.create(Player);
// playerOne.init("Gogox", "Orc", 145);
//
// console.log(playerOne.announce());

////

// function Player (name, race, health) {
//   this.name = name;
//   this.race = race;
//   this.health = health;
// }
//
// Player.prototype.describe = function () {
//   let description = "This is " + this.name + ". He's a(n) " + this.race + " and has " + this.health + " health.";
//   return description;
// }
//
// let playerOne = new Player("Gogox", "Orc", 148);
// console.log(playerOne.describe());

////

// class Player {
//   constructor (name, race, health) {
//     this.name = name;
//     this.race = race;
//     this.health = health;
//   }
// }
//
// let playerOne = new Player("Gogx", "Orc", 148);
//
// let describe = function (name, race, health) {
//   let description = "This is " + name + ". He's a(n) " + race + " and has " + health + " health.";
//   return description;
// }
//
// console.log(describe(playerOne.name, playerOne.race, playerOne.health));

////

// let passengers = ["John Smith", "Jane Doe", "Ta Mère"];
//
// for (let passenger of passengers) {
//   console.log("Passenger " + passenger + " is now boarding. Thank you.");
// }

////

// let passengers = ["John Smith", "Jane Doe", "Ta Mère"];
//
// for (i in passengers) {
//   console.log("Passenger " + passengers[i] + " is now boarding. Thank you.");
// }
