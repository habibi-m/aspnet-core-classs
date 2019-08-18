let randVal = 16;

var p4 = new Promise(function(resolve, reject) {
    if (randVal < 18) {
        throw new Error("Can't Vote");
    } else {
        resolve("Can Vote");
    }
});
p4.then((val) => document.write(`${val}<br/>`))
    .catch((err) => document.write(`${err.message}<br/>`));