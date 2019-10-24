/**
 * Promises define code that is going to be executed later. 
 * Promises either succeed or fail once and they are either going to have a state of fulfilled, rejected, pending or settled
 * 
 */


// (() => {
//     setTimeout(function(){ alert("Hello"); }, 3000);
// })()
 

// var p1 = Promise.resolve("Resolve Meeeee");

// p1.then((a) => document.write(`${a}<br/>`));


var p2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Resolve Me"), 5000);
});

p2.then((res) => console.log(`${res}<br/>`));

console.log('here!');