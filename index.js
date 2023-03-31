// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter");
const heracles = new Fighter("Heracles 🧔", 20, 6);
const lion = new Fighter("Nemean Lion 🦁 ", 11, 13);

let i = 1;
while (heracles.life > 0 && lion.life > 0) {
    console.log(`\n--------------------------------------> Round ${i} :`);
    heracles.fight(lion);
    if (lion.life) lion.fight(heracles);    
    i++;
}
