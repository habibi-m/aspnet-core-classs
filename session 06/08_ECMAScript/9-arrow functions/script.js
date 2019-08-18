/**
Syntax



Basic Syntax

(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalent to: (param1, param2, …, paramN) => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// A function with no parameters should be written with a couple of parentheses.
() => { statements }


Advanced Syntax

// Parenthesize the body of function to return an object literal expression:
params => ({foo: bar})

// Rest parameters and default parameters are supported
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }

// Destructuring within the parameter list is also supported
let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();  
// 6
 */

let difference = (num1, num2) => num1 - num2;

document.writeln(`5 - 10 = ${difference(5, 10)} <br />`);



let mult = (num1, num2) => {
    let product = num1 * num2;

    document.writeln(`${num1} * ${num2} = ${product} <br />`);
}

mult(5, 10);