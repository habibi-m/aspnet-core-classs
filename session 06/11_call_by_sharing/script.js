/**
 * in JavaScript, primitive types are always passed by value(call by value or pass by value concept)
 */

let a = 10;

const letsChangeIt = (val) => {
    val *= 2; 
}

letsChangeIt(a);

document.write(a);

