/* Fighter class definition */
//const maxLife = 100;

class Fighter {
    constructor (firstName, strength, dexterity, life = 100, weaponDamage = null, shield=null){

        this.firstName = firstName;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = life;
        this.weaponDamage = weaponDamage;
        this.shield = shield;
    }
    
    getDamage(){
        if(this.weaponDamage) {return this.strength+this.weaponDamage} else{ return this.strength;}
    }

    getDefense(){
        if(this.shield) {return this.dexterity+this.shield} else {return this.dexterity;}
    }

    fight(attacked) {
        console.log(`\n${this.firstName} ⚔️  ${attacked.firstName} `);
        const attack = Math.floor(Math.random() * (this.getDamage()+1));
        
        
        let dex = attacked.getDefense();
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

export default Fighter;