
function AddItem() {
    var counter = document.querySelectorAll('#list li').length;

    //create li
    var li = document.createElement('li');
    li.innerText = ` Item ${counter + 1}`;

    //create checkbox
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    //set checkbox in front of li
    li.prepend(checkbox);  // put checkbox in front of the li (not the parent of the li)

    // add li to the ul
    document.getElementById('list').appendChild(li);
}


function RemoveLastItem() {
    var list = document.getElementById("list");
    if (list.hasChildNodes()) {
        list.removeChild(list.lastElementChild); //list.removeChild(list.lastChild);
        /*The difference between this property and lastElementChild, 
        is that lastChild returns the last child node as an element node, a text node or a comment node (depending on which one's last), 
        while lastElementChild returns the last child node as an element node (ignores text and comment nodes).
        */
    }
}


function RemoveAll() {
    var list = document.getElementById("list");

    while (list.hasChildNodes()) {   
        list.removeChild(list.firstChild);
    }
}


function RemoveSelectedItems() {
    alert('by');
}










