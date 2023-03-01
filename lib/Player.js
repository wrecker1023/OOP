const Potion = require('../lib/Potion');
const Character = require('./Character');

class Player extends Character {
    constructor(name = '') {
        super(name);

    this.inventory = [new Potion('health'), new Potion()]; 

    }
    getStats() {
        return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
        };
    }
    getInventory() {
        if(this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion) {
        this.inventory.push(Potion);
    }

    usePotion(index) {
    // The .splice() method removes items from an array 
    // and returns the removed item(s) as a new array
    const potion = this.getInventory().splice(index, 1) [0];


    switch(potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
            case 'health':
                this.health += potion.value;
                break;
                case 'strength':
                    this.strength += potion.value;
    }
 }
}

//inherit prototype methods from Character
Player.prototype = Object.create(Character.prototype);

module.exports = Player;
