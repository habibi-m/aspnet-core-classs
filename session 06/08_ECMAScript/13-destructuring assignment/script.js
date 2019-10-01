/**
 * The destructuring assignment syntax is a JavaScript expression that makes it possible to 
 * unpack values from arrays, or properties from objects, into distinct variables.
 */

const obj = { first: 'Jane', last: 'Doe' };

let { first, last } = obj; // first = 'Jane'; last = 'Doe'
document.write(`first : ${first}, last : ${last}<br />`);

let { first: f, last: l } = obj; // f = 'Jane'; l = 'Doe'
document.write(`f : ${f}, l : ${l}<br />`);


const iterable = ['a', 'b', 'c', 'd'];
const [x, y] = iterable; // x = 'a'; y = 'b'
document.write(`x : ${x}, y : ${y}<br />`);


[a, b, ...rest] = [10, 20, 30, 40, 50];
document.write(`a : ${a}<br />`); // 10
document.write(`b : ${b}<br />`); // 20
document.write(`rest : ${rest}<br />`); // [30, 40, 50]


const removeFirstTwo = _arr => {
    const [ , ,...rest] = _arr;
    return rest;
}

document.write(`removed first two: ${removeFirstTwo([1,2,3,4,5,6])}<br/>`);

//Swapping variables
var a1 = 5, a2 = 9;
document.write(`${a1} ${a2}<br />`); // 5 9
[a1, a2] = [a2, a1];
document.write(`${a1} ${a2}<br />`); // 9 5



//Ignoring some values
var nums = [8, 3, 6];
let [, , chaos] = nums;
document.write(`Chaos : ${chaos}<br/>`);

let [, ...last2] = nums;
document.write(`${last2}`);