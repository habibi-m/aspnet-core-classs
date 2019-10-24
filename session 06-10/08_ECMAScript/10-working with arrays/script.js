/**
 * The reduce() method reduces the array to a single value.

The reduce() method executes a provided function for each value of the array (from left-to-right).

The return value of the function is stored in an accumulator (result/total).

Note: reduce() does not execute the function for array elements without values.
 */
let nums = [1, 2, 3, 4, 5];

function getSum(total, num) {
    return total + num;
}

function myFunction() {
    document.write(`${nums.reduce(getSum)}<br />`);
}
myFunction();





let sumVals = nums.reduce((a, b) => a + b);
let evens = nums.filter(v => v % 2 == 0);
let doubles = nums.map(v => v * 2);

document.write(`Sum : ${sumVals}<br />`);
document.write(`Evens : ${evens}<br />`);
document.write(`Doubles : ${doubles}<br />`);