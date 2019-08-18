/**
 * Promises define code that is going to be executed later. 
 * Promises either succeed or fail once and they are either going to have a state of fulfilled, rejected, pending or settled
 * 
 */

var p1 = Promise.resolve("Resolve Me");
p1.then((res) => document.write(`${res}<br/>`));


var p2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Resolve Me 2"), 2000);
});
p2.then((res) => document.write(`${res}<br/>`));