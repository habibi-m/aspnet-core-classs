
function AddItem() {
    var counter = document.querySelectorAll('#list li').length;

    var li = document.createElement("li");
    li.innerHTML = `Item ${counter + 1}`;

    document.getElementById('list').appendChild(li);
}


function RemoveItem() {
    var list = document.getElementById("list");

    if (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
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