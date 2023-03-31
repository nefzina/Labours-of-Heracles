// First Labour : Heracles vs Nemean Lion
// use your Figher class here
import Fighter from "./src/Fighter.js";
import Weapon from "./src/Weapon.js";
import { Shield } from "./src/Weapon.js";

const sword = new Weapon("Sword", 10);
const shield = new Shield(10);

const heracles = new Fighter("Heracles 🧔", 20, 6, 100, sword.damage, shield.protection);
const lion = new Fighter("Nemean Lion 🦁 ", 11, 13);
const Erymanthian = new Fighter("Erymanthian boar 🐗", 25, 12);

let i = 1;
// while (heracles.life > 0 && lion.life > 0) {
//     console.log(`\n--------------------------------------> Round ${i} :`);
//     heracles.fight(lion);
//     if (lion.life) lion.fight(heracles);    
//     i++;
// }

while (heracles.life > 0 && Erymanthian.life > 0) {
    console.log(`\n--------------------------------------> Round ${i} :`);
    heracles.fight(Erymanthian);
    if (Erymanthian.life) Erymanthian.fight(heracles);    
    i++;
}
