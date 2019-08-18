/**
 * A map is going to be a collection of key-value pairs
 * 
 */

var randMap = new Map();

randMap.set("key1", 10);
randMap.set("key2", "random string");


document.write(`key1 : ${randMap.get("key1")}<br/>`);
document.write(`key2 : ${randMap.get("key2")}<br/>`);

document.write(`Map Size : ${randMap.size}<br/>`);

randMap.forEach(function(value, key) {
    document.write(`${key} : ${value}<br/>`);
});