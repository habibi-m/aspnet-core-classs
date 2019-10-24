/**
 * A symbol is gonna be kind of like an enumerate type that can be usedas an identifier
 * and they can't be changed whitch means they are immutable.
 * 
 * Symbols are a new primitive type in ECMAScript 6. The symbol is a unique token that is guaranteed 
 * never to clash with another symbol.In this sense, you could think of them as a kind of UUID (Universally Unique Identifier)
 * Every time you call the Symbol function, you will get a new and completely unique value
 * let foo = Symbol();
 *let bar = Symbol();

 *foo === bar
 * <-- false
 *
 * 
 * Symbols can also be created with a label, by passing a string as the first argument. 
 * The label does not affect the value of the symbol, but is useful for debugging, and is shown if 
 * the symbol’s toString() method is called. It’s possible to create multiple symbols with the 
 * same label, but there’s no advantage to doing so and this would probably just lead to confusion.
 * 
 * let foo = Symbol('baz');
 *let bar = Symbol('baz');

 *foo === bar
 * <-- false
 *console.log(foo);
 * <-- Symbol(baz)
*/

let capital = Symbol("State capital");

let pennsylvania = {}; // an objct
pennsylvania[capital] = "Harrisburg";

document.write(`Capital of PA : ${pennsylvania[capital]}<br/>`);
document.write(`Symbol Capital : ${capital.toString()}<br/>`);


/**
 * you can define shared symbols by using 'Symbol.for'  
 */
let employNum = Symbol.for("Employee Number"); //all employees are gonna have a number
let bobSmith = {}; //an object
bobSmith[employNum] = 10;

let sallyMarks = {};
sallyMarks[employNum] = 17;

document.write(`Bob : ${bobSmith[employNum]}<br/>`);
document.write(`Sally : ${sallyMarks[employNum]}<br/>`);