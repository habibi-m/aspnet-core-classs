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
let myMother = new Person('Shahrbanoo', "karimi", 60);

console.log(myFather.firstName);

Person.prototype.nationality = "IRAN";
myMother.nationality = "Armani";

console.log(myFather.nationality);
console.log(myMother.nationality);

// Person.prototype.fullName = function() {
//     return this.firstName + " " + this.lastName;
// };

// console.log(myFather.fullName());