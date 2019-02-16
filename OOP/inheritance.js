class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    walk() {
        return `${this.name} is walking`;
    }
}


class Male extends Human {
    constructor(name, age) {
        super(name, age);
        this.gender = 'Male';
    }

    describe() {
        return `${this.name} is a boy`;
    }
}


class Female extends Human {
    constructor(name, age) {
        super(name, age);
        this.gender = 'Female';
    }

    describe() {
        return `${this.name} is a girl`;
    }
}


const proton = new Male('Bolaji', 10);
console.log(proton.walk()); // Bolaji is walking
console.log(proton.describe()); // Bolaji is a boy
console.log(proton.gender); // Male
console.log();

const tina = new Female('Tina', 5);
console.log(tina.walk()); // Tina is walking
console.log(tina.describe()); // Tina is a girl
console.log(tina.gender); // Female
console.log();
