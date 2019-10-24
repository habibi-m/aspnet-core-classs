/**
 * Object literals

An object literal is a list of zero or more pairs of property names and associated values of an object, 
enclosed in curly braces ({})
 */
var sales = 'Toyota';

function carTypes(name) {
    if (name === 'Honda') {
        return name;
    } else {
        return "Sorry, we don't sell " + name + ".";
    }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

document.write(`${car.myCar}<br />`); // Saturn
document.write(`${car.getCar}<br />`); // Honda
document.write(`${car.special}<br />`); // Toyota


/**Additionally, you can use a numeric or string literal for the name of a property 
 * or nest an object inside another. The following example uses these options. */
var car2 = { manyCars: { a: 'Saab', 'b': 'Jeep' }, 7: 'Mazda', '': 'An empty string', '!': 'Bang!' };

document.write(`${car2.manyCars.b}<br />`); // Jeep
document.write(`${car2[7]}<br />`); // Mazda
document.write(`${car2['']}<br />`); // An empty string
document.write(`${car2['!']}<br />`); // Bang!




function createAnimal(name, owner) {
    return {
        name,
        owner,
        getInfo() {
            return `${this.name} is owned by ${this.owner}`
        },
        //object inside of an object
        address: {
            street: '123 Main St',
            city: "Babol"
        }
    }
}

var ramkal = createAnimal("Ramkal", "Sterling");

document.write(`${ramkal.getInfo()}<br />`);
document.write(`${ramkal.name} is at ${ramkal.address.street}<br />`);
document.write(`${Object.getOwnPropertyNames(ramkal).join(" ")}<br />`);

let { name, owner } = ramkal;
document.write(`Name : ${name}, Owner : ${owner}<br />`);

let { address } = ramkal;
document.write(`Street : ${address.street}, City : ${address.city}<br />`);