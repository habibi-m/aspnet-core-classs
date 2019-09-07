
function AddItem() {
    //var counter = document.querySelectorAll('#list li').length;

    var li = document.createElement('li');
    //li.innerText = `Item ${counter + 1}`;
    li.innerText = `Item`;

    document.getElementById('list').appendChild(li);
}


function RemoveItem() {
    var list = document.getElementById("list");

    if (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}



function RemoveAll() {
    var list = document.getElementById("list");

    while (list.hasChildNodes()) {   
        list.removeChild(list.firstChild);
    }
}

// var arr = new Array("hello", 6, {name:'hasan', age: 30}, function () {alert('hello js6')}, false, 10 + 10);

// console.log(eval(arr[5]));

//let name=10

let sum =  11 + 2 + "3";
let sum2 = "3" + 11 + 2;

console.log(sum);
console.log(sum2);


let a = 10;
let b = "10";

console.log(`${a} is equal ${b}: ${a==b}`);

//console.log(a + " is equal " + b + ":", a==b);


let cars = ["206", "parse"];
let user = {name: "ali", age:10}

console.log(cars["0"]);
console.log(user.name);

function getuser(){
    //can access user
}
document.getElementById
let person = {1234: 'navid',age: 8};
//Dot Notation
//person.name = 'hamid';
// Bracket Notaion
//let nameAttr = 'name';
//person[nameAttr] = 'hamed';
console.log(person[123]);











