let randVal = 18;

var p3 = new Promise(function(resolve, reject) {
    if (randVal == 18) {
        resolve("Good Value");
    } else {
        reject("Bad Value");
    }
});
p3.then((val) => document.write(`${val}<br/>`),
    (err) => document.write(`${err}<br/>`)
);