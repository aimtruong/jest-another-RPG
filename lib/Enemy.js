
const Potion = require("./Potion");

// enemy's object
function Enemy(name, weapon){
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
};

// return description of enemy
Enemy.prototype.getDescription = function(){
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

// check enemy's health
Enemy.prototype.getHealth = function() {
    return `The ${this.name}'s health is now ${this.health}!`;
};
  
// check if enemy is alive or not
Enemy.prototype.isAlive = function() {
    if (this.health === 0) {
      return false;
    }
    return true;
};
  
// get emeny's attack value from strength
Enemy.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;
  
    return Math.floor(Math.random() * (max - min) + min);
};
  
// reduce enemy's health when hit
Enemy.prototype.reduceHealth = function(health) {
    this.health -= health;
  
    if (this.health < 0) {
      this.health = 0;
    }
};



module.exports = Enemy;