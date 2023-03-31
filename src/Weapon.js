export default class Weapon {
    constructor(name, damage = 10) {
        this.name = name;
        this.damage = damage;
    }
}

export class Shield {
    constructor( protection = 10) {
        this.protection = protection;
    }
}

//export default { Weapon, Shield}