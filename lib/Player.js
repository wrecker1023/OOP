const Potion = require('../lib/Potion');
const Character = require('./Character');

function Player(name = '' ) {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95 );
    this.strength = Math.floor(Math.random() * 5 + 7 );
    this.agility = Math.floor(Math.random() * 5 + 7 );

    this.inventory = [new Potion('health'), new Potion()]; 

    // Prototype variants 

    // //returns an onject with various player propertys
    // this.getStats = function() {
    //     return {
    //         potions: this.inventory.length,
    //         health: this.health,
    //         strength: this.strength,
    //         agility: this.agility
    //     };
    // };

    // //returns inventory array
    // this.getInventory = function() {
    //     if(this.inventory.length) {
    //         return this.inventory;
    //     }
    //     return false;
    // };
};

Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.getInventory = function () {
    if(this.inventory.length) {
        return this.inventory;
    }
    return false;
};

Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
};

Player.prototype.usePotion = function(index) {

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

};

module.exports = Player;
