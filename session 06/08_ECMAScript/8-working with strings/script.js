let fname = "Mohammad";

document.write("Hello ".repeat(3) + "<br />");

document.writeln(fname.startsWith("Mo") + "<br />");

document.writeln(fname.endsWith("add") + "<br />");

document.writeln(fname.includes("hamd") + "<br />");

let multilinestring = "this is \
a multiline \
string."

document.writeln(multilinestring + "<br />");

let amothermultilinestring = `another
multiline
string.....`

document.writeln(`${amothermultilinestring}<br />`);

let myString = "hello javascript, java";
let str2 = myString.substring(2);
let _indexof = myString.lastIndexOf("jav");
console.log(myString[2]);

var animals = ["cat", "dog", "ant", "amin"];
console.log(animals[-1]);


console.log(parseInt(10/3.5));
console.log(isNaN(10/'aa'))
