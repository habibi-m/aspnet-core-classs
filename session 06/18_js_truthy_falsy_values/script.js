const TruthyOrFalsy = (a) => {
    return a ? "truthy" : "falsy";
}

console.log(`false : ${TruthyOrFalsy(false)}`);
console.log(`null : ${TruthyOrFalsy(null)}`);
console.log(`undefined : ${TruthyOrFalsy(undefined)}`);
console.log(`0 : ${TruthyOrFalsy(0)}`);
console.log(`NaN : ${TruthyOrFalsy(NaN)}`);
console.log(`empty string : ${TruthyOrFalsy('')}`);
console.log(`document.all : ${TruthyOrFalsy(document.all)}`);

console.log(`12 : ${TruthyOrFalsy(12)}`); //number
console.log(`'hello' : ${TruthyOrFalsy('hello')}`); //string
console.log(`{} : ${TruthyOrFalsy({})}`); //object
