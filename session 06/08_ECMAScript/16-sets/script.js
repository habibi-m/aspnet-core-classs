/**
 * A set is just a going to be a list of values with no duplication inside of them. without keys
 * 
 */

let nima = { name: "Nima" };
let amin = { name: "Amin" };
var set = new Set();

set.add(10);
set.add("word");
set.add("word");
set.add(nima);
set.add(amin);
set.add(nima);


console.log(`Has 10 : ${set.has(10)}`);
console.log(`Set Size : ${set.size}`);

for (let val of set)
    console.log(`Set Value : ${val}`);

console.log(set.delete(10)); // true