
let map = new Map();

map.set("key1", 'amin'); // a string key
map.set(2, "nima"); // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:

console.log(`1 : ${map.get("key1")}`);
console.log(`2 : ${map.get(2)}`);
console.log(`3 : ${map.get(true)}`);

console.log(`Map Size : ${map.size}`);


//Iteration over Map
// 1-iterate over keys (vegetables)
for (let keys of map.keys()) {
    console.log(keys);
}
  
// 2-iterate over values (amounts)
for (let values of map.values()) {
    console.log(values);
}

// 3-iterate over [key, value] entries
for (let entry of map) {
    console.log(entry);
}

// 4- iterate over [key, value] entries using forEach
map.forEach((value, key) => console.log(`${key}:${value}`));


map.delete(2) // removes the value by the key.
console.log(`${map.get(2)}`); // undefined


map.set("key1", 'nima'); // will overrides
console.log(`${map.get("key1")}`); // undefined


//Map can also use objects as keys
let user = { name: "mohsen", age:2 };
map.set(user, 10); // an object key
console.log(`${map.get(user)}`);

console.log(map.has("key1") ? 'key1 Found' : 'key1 Not found');

map.clear() // removes everything from the map