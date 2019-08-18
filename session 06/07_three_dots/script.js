/**
 * It's introduced in ES6
 */

// 1- Rest Parameters
// function myFunc(a, b, ...args) {
//     console.log(a);
//     console.log(b);
//     console.log(args);
// }

// console.log(myFunc(11, 22, 33, 44, 55));



// function sum(...args) {
//     return args.reduce((total, value) => total + value);
// }

// console.log(sum(1));
// console.log(sum(7,3));
// console.log(sum(6,4,3,8));






// 2- Spread Operators
/** expands elements of an iterable (like an array) into places where multiple elements can fit */

// function myFunc(a, b, ...params) { // used rest operator here
//     document.write(`${a}\n`);
//     document.write(`${b}\n`);
//     document.write(params);
// }
  
// var inputs = ["a", "b", "c", "d", "e", "f"];
// myFunc(...inputs); // used spread operator here


// Spread operators to combine arrays
// const onlineUsers = ['Amin', 'Hamid'];
// const justLoggedIn = ['Nima', 'Mohsen'];

// const allOnlineUsers = [...onlineUsers, 'Hichkas', ...justLoggedIn];

// document.write(allOnlineUsers);



// Spread operators to merging objects
// var obj1 = { foo: 'bar', x: 42 };
// var obj2 = { foo: 'baz', y: 13 };

// var clonedObj = { ...obj1 };
// console.log('clonedObj' , clonedObj);

// var mergedObj = { ...obj1, ...obj2 };
// console.log('mergedObj' , mergedObj);