// 1- Use as an argument to other functions
// setTimeout(function() {
//     alert('hello');
// }, 1000);


// 2- Use as a closure
// (function(message) {
//     alert(message);
// })('foo');


// 3- Self-Invoking Functions; A self-invoking expression is invoked (started) automatically, without being called
(function (message) {
    alert(message);  // I will invoke myself
})('Hello');



// ((a, b) => {
//     let result = a + b;
//     console.log(result);
// })(2,3);

// //Sum();