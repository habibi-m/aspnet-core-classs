/**
 * A set is just a going to be a list of values with no duplication inside of them
 * 
 */

var randSet = new Set();

randSet.add(10);
randSet.add("word");


document.write(`Has 10 : ${randSet.has(10)}<br/>`);
document.write(`Set Size : ${randSet.size}<br/>`);

randSet.delete(10);

for (let val of randSet)
    document.write(`Set Value : ${val}<br/>`);