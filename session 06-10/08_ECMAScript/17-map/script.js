let map = new Map();

map.set("key1", 'amin'); // a string key
map.set(2, "nima"); // a numeric key
map.set(true, 'mohsen'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:

console.log(`1 : ${map.get("key1")}`);
console.log(`2 : ${map.get(2)}`);
console.log(`3 : ${map.get(true)}`);

console.log(`Map Size : ${map.size}`);

console.log('-------------------------------');

//Iteration over Map

// 1-iterate over keys (vegetables)
for (let keys of map.keys()) {
    console.log(keys);
}

console.log('-------------------------------');
// 2-iterate over values (amounts)
for (let values of map.values()) {
    console.log(values);
}



//That’s because map.keys() returns an iterable, but not an array. We can convert it into an array using Array.from
// 1-iterate over keys (vegetables)
for (let keys in Array.from(map.keys())) {    //0, 1 , 2
    console.log(keys);
} 

console.log('-------------------------------');
// 2-iterate over values (amounts)
for (let values in Array.from(map.values())) { //0, 1, 2
    console.log(values);
}

console.log('-------------------------------');
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


let user2 = { name: "mohsen", age:2 };
map.set(user2, 12); // an object key
console.log(`${map.get(user)}`);

console.log(map.has("key1") ? 'key1 Found' : 'key1 Not found');

map.clear() // removes everything from the map