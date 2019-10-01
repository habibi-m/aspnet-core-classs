const increment = (number, value = 1) => {
    return number + value;
}

console.log(increment(3));
console.log(increment(3, 2));



const mul = (a, b, c=1) => a * b * c;

console.log(mul(2, 3));