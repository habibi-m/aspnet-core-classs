let randVal = 12;

var p3 = new Promise(function(resolve, reject) {
    if (randVal == 18) {
        resolve("Good Value");
    } else {
        reject("Bad Value");
    }
});



p3.then((val) => document.write(`success; ${val}<br/>`),
    (err) => document.write(`fail; ${err}<br/>`)
);

