function AddItem() {

    var li_counter = document.querySelectorAll('#list li').length;

    var li = document.createElement("li");
    li.innerHTML = `Item ${li_counter + 1}`;


    
    document.getElementById('list').appendChild(li);
}

var arr = new Array("hello", 6, {name:'hasan', age: 30}, function () {alert('hello js6')}, false, 10 + 10);

console.log(eval(arr[5]));