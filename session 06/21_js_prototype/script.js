/**
 * All JavaScript objects inherit properties and methods from a prototype
 * The Object.prototype is on the top of the prototype inheritance chain
 */

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

let myFather = new Person('Ali', "Habibi", 63);

console.log(myFather.firstName);


Person.prototype.nationality = "IRAN";
console.log(myFather.nationality);

Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};

console.log(myFather.fullName());