let array1 = Array.of(1, 2, 3);
let array2 = Array.from("word");
let array3 = Array.from(array1, (value) => value * 2)


for (let val of array3)
    document.write(`Array val : ${val}<br />`);