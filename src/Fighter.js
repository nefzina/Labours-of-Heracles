/* Fighter class definition */
const maxLife = 100;
class Fighter {
    constructor (firstName, strength, dexterity, life = maxLife){
        this.firstName = firstName;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = life;
    }
    
    fight(attacked) {
         console.log(`\n${this.firstName} ⚔️  ${attacked.firstName} `);
         const attack = Math.floor(Math.random() * (this.strength+1));
        
         let dex = attacked.dexterity;
        for (let i=0; i <= attack; i++) {
            dex ? dex-- : attacked.life ? attacked.life--: null;
        }
        console.log(`--> ${attacked.life} points left`);
                
        if (!attacked.life) {    
            console.log(`\n🏆 The winner is : ${this.firstName} `);
            console.log(`☠️  ${attacked.firstName} is dead`);
        }                
    }
}

module.exports = Fighter;