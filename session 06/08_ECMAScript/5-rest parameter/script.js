/**
 * The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

Syntax:

    function f(a, b, ...theArgs) {
        ...
    }
Description
If the last named argument of a function is prefixed with ..., it becomes an array whose elements from
0 (inclusive) to theArgs.length (exclusive) are supplied by the actual arguments passed to the function.
In the above example, theArgs would collect the third argument of the 
function (because the first one is mapped to a, and the second to b) and all the consecutive arguments.
 */

function getSumMore(...vals) {
    let sum = 0;
    for (var i = 0; i < vals.length; i++) {
        sum += vals[i];
    }
    document.write(`The sum is ${sum}<br />`);
}

getSumMore(1, 2, 3, 4, 5);

let vals = [1, 2, 3];
getSumMore(...vals);