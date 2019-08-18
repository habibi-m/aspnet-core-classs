class Mammal {
    constructor(name) {
        this._name = name;
    }

    /**
     * getter
     */
    get name() {
        return this._name;
    }

    /**
     * setter
     */
    set name(name) {
        this._name = name;
    }

    static makeMammal(name) {
        return new Mammal(name);
    }

    getInfo() {
        return `${this.name} is a mammal`;
    }
}

let monkey = new Mammal("Fred");
monkey.name = "Mark";
document.write(`Mammal : ${monkey.name}<br/>`);

let chipmonk = Mammal.makeMammal("Chipper");
document.write(`Mammal 2 : ${chipmonk.name}<br/>`);





class Marsupial extends Mammal {
    constructor(name, hasPouch) {
        super(name); // call supper class constructor
        this._hasPouch = hasPouch;
    }

    /**
     * getter
     */
    get hasPouch() {
        return this._hasPouch;
    }

    /**
     * setter
     */
    set hasPouch(hasPouch) {
        this._hasPouch = hasPouch;
    }

    /**
     * overide
     */
    getInfo() {
        return `${this.name} is a marsupial`;
    }
}

let kangaroo = new Marsupial("Paul", true);
document.write(`It is ${kangaroo.hasPouch} that ${kangaroo.name} has a pouch<br/>`);

document.write(`${chipmonk.getInfo()}<br/>`);
document.write(`${kangaroo.getInfo()}<br/>`);




/**
 * dynamically inherits from classes
 */

function getClass(classType) {
    if (classType == 1) {
        return Mammal;
    } else {
        return Marsupial;
    }
}

class Koala extends getClass(2) {
    constructor(name) {
        super(name);
    }
}

let carl = new Koala("Carl");
document.write(`${carl.getInfo()}<br/>`);