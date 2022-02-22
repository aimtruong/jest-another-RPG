
const Enemy = require("../lib/Enemy.js");
const Potion = require("../lib/Potion.js");

jest.mock("../lib/Potion.js");

// check if object enemy is created
test("creates an enemy object", () => {
    const enemy = new Enemy("goblin", "sword");

    expect(enemy.name).toBe("goblin");
    expect(enemy.weapon).toBe("sword");
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
});

// checks for enemy's description
test("gets a description of the enemy", () => {
    const enemy = new Enemy("goblin", "sword");
    
    expect(enemy.getDescription()).toEqual(expect.stringContaining("goblin"));
    expect(enemy.getDescription()).toEqual(expect.stringContaining("sword"));
});

// get enemy's health
test("gets enemy's health value", () => {
    const enemy = new Enemy('goblin', 'sword');
  
    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

// check enemy's health to see if alive to keep game going
test('checks if enemy is alive or not', () => {
    const enemy = new Enemy('goblin', 'sword');
  
    expect(enemy.isAlive()).toBeTruthy();
  
    enemy.health = 0;
  
    expect(enemy.isAlive()).toBeFalsy();
});
  
// get enemy's attack value from strength
test("gets enemy's attack value", () => {
    const enemy = new Enemy('goblin', 'sword');
    enemy.strength = 10;
  
    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});
  
// reduce enemy's health when getting hit
test("subtracts from enemy's health", () => {
    const enemy = new Enemy('goblin', 'sword');
    const oldHealth = enemy.health;
  
    enemy.reduceHealth(5);
  
    expect(enemy.health).toBe(oldHealth - 5);
  
    enemy.reduceHealth(99999);
  
    expect(enemy.health).toBe(0);
});