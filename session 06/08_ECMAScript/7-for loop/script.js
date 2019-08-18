
for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}

/********************/
var cars = ["206", "405", "407"];

//Statement 1
for (i = 0, len = cars.length, text = ""; i < len; i++) { 
    text += cars[i] + "<br>";
}

//Statement 2
var i = 2;
var len = cars.length;
var text = "";
for (; i < len; i++) { 
  text += cars[i] + "<br>";
}


/***************************/
//The For/In Loop
/**loops through the properties of an object */

var person = {fname:"John", lname:"Doe", age:25}; 

var text = "";
var x;
for (x in person) {
  text += person[x];
}

/************************** */
//The For/Of Loop
/**loops through the values of an iterable objects, such as Arrays, Strings, Maps, NodeLists, and more */


let text = "Lorem Ipsum Typesetting Industry";

for (let c of text) {
    document.write(`${c} `);
}


var cars = ['BMW', 'Volvo', 'Mini'];

for (let item of cars) {
  document.write(`${item} `);
}