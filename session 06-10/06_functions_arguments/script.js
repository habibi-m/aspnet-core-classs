//access function arguments
function sum(a, b) {
    console.log(arguments[1])
    return a + b + arguments[3];
}

console.log(sum(2,6));

//Rest Parameters
