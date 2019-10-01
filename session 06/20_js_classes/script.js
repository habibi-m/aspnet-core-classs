class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    Hello() {
        console.log(`Hi! I'm ${this.name}. I weigh ${this.weight} kilos.`);
    }
}

let horse = new Animal('Dol-Dol', 400);
horse.Hello();


class Lion extends Animal {
    constructor(name, weight, roaring) {
        super(name, weight);
        this.roaring = roaring;
    }

    /**
     * getter
     */
    get Roaring() {
        return this.roaring;
    }

    /**
     * setter
     */
    set Roaring(value) {
        this.roaring = value;
    }

    /**
     * overide
     */
    Hello() {
        console.log(`Hi! I'm ${this.name}. I weigh ${this.weight} kilos`);
        
        if(this.roaring) 
            console.log(`I can make a roar`);
        else 
            console.log(`I can't make a roar`);
    }
}

let lion = new Lion('Simba', 600, true);
lion.Hello();
console.log(`roaring equals ${lion.Roaring}`);

lion.Roaring = false;

lion.Hello();

console.log(`roaring equals ${lion.Roaring}`);