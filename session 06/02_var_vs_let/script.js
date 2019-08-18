
// 1- `let` does not let you declare a variable twice. but `var` does

(function () {
    let fname = "Milad";
    let lname = "Bahari";

    // let fname = "Hasan";

    let elem = document.querySelector('#greet');

    elem.innerHTML = `Welcome ${fname} ${lname}`;
})()

// 2- `var` is scoped to the nearest function block and `let` is scoped to the nearest enclosing block
// function checkScope() {
//     "use strict";
//     let i = "function scope";
//     if (true) {
//         i = "block scope";
//         console.log("Block scope i is: ", i);
//     } else {
//         console.log("Function scope i is: ", i);
//         return i;
//     }
// }
