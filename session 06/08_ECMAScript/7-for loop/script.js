
// for (i = 0; i < 5; i++) {
//     text += "The number is " + i + "<br>";
// }

// /********************/
// var cars = ["206", "405", "407"];

// //Statement 1
// for (i = 0, len = cars.length, text = ""; i < len; i++) { 
//     text += cars[i] + "<br>";
// }

// //Statement 2
// var i = 2;
// var len = cars.length;
// var text = "";
// for (; i < len; i++) { 
//   text += cars[i] + "<br>";
// }


/***************************/
//The For/In Loop
/**loops through the properties of an object */

// var person = {fname:"John", lname:"Doe", age:25}; 

// var text = "";
// var x;
// for(x in person) {
//   text += person[x];
// }

// console.log(text);

/************************** */
//The For/Of Loop
/**loops through the values of an iterable objects, such as Arrays, Strings, Maps, NodeLists, and more */


// let text = "Lorem Ipsum Typesetting Industry";

// for (let c of text) {
//     document.write(`${c} `);
// }


//let iterable = [10, 20, 30];

// let iterable = {fname:"amin", lname:"erfani", age:2};

// for (let value in iterable) {
//   value = parseInt(value) + 1;
//   console.log(value);
// }


// var cars = ['BMW', 'Volvo', 'Mini'];

// for (let item of cars) {
//   document.write(`${item} `);
// }


// let users = [10,20,30];

// console.log(users.toString())

// let users2 = [];

// function Square(x) {
//   users2.push(x * x);
// }

// users.map(Square);

// console.log(users2);




// let persons = [ {name:'ali', age:20}, {name:'hasan', age:30}];

// const Print = (x) => {
//   console.log(x.name + ' ' + x.age);
// }

// persons.forEach(Print);



//const Sum = (a,b) => a + b;

// const Print = x => console.log(x);


// Print(2);


// function Square(x) {
//   return x * x;
// }

// let numbers = [10,20,30];

// let result = numbers.map(Square);

// console.log(result);


// function Sum(total, x) {
//   return total + x;
// }

// let numbers = [10,20,30];

// let result = numbers.reduce(Sum);

// console.log(result);


var numbers = [45, 4, 9, 16, 25];
//var over18 = numbers.filter(myFunction);
// console.log(over18.toString());



//var over18 = [] + myFunction.numbers;

// function myFunction(value) {
//     return value > 18;
//   }
// var x=[];
// for(let i of numbers) {
//   if (i>18)   
//     x.push(i);
//  // over18.push()
// }


var over18 = numbers.filter(i => i > 18);

console.log(over18);