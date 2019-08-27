/**
 * in JavaScript, primitive types are always passed by value(call by value or pass by value concept)
 */

let num = 10;

const DoubleIt = (val) => {
    val *= 2; 
}

DoubleIt(num);

document.write(num);

/**
 * when you pass an object, it will passed by reference
 */


 let employee = {name:'Amin', Id: 1001};

 let LoadEmployee = (emp) => {
     
     emp = {name:'Nima', id: 1002}; // Reassigning; won't change the original object
     //emp.name='Nima'; // Mutating; will do change the original object
 }

 LoadEmployee(employee);

 console.log(employee);



 /**
  * The concept of Mutating and Reassigning
  */

 let a = { num:10 };
 let b = a;

 a = { num: 20 }; // Reassigning; won't affect b
 //a.num = 20; // Mutating; will change b

 console.log(a);
 console.log(b);
