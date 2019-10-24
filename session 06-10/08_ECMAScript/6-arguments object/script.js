/**
 * Description
The arguments object is a local variable available within all functions. You can refer to a 
function's arguments within the function by using the arguments object. This object contains an 
entry for each argument passed to the function, the first entry's index starting at 0. 
For example, if a function is passed three arguments, you can refer to them as follows:
arguments[0]
arguments[1]
arguments[2]
 */

function Add(a, b, c) {
    //let sum = a + b + c;
    arguments[0] = 2.5;
    let sum = arguments[0] + arguments[1] + arguments[2];
    return sum;
}
document.write(`a + b + c = ${Add(2,3,4)} <br />`);

function getSum(num1 = 1, num2 = 1) {
    document.write(`${num1} + ${num2} = ${num1 + num2} <br />`);

    document.write(`${arguments[0]} + ${arguments[1]} <br />`);
}

getSum(3);