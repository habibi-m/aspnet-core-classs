
// /**
//  * click
//  * dblclick
//  * keydown
//  * keypress
//  * keyup
//  * mouseup
//  * scroll
//  * ...
//  */

const addListener = () => {
    var btn = document.getElementById("btnSum");

    if (btn.removeEventListener) {  // check if method is supported by browser or not
        btn.addEventListener("click", handler);
    }
}
const removeListener = () => {
    var btn = document.getElementById("btnSum");

    if (btn.removeEventListener) {  // check if method is supported by browser or not
        btn.removeEventListener("click", handler);
    }
}

var handler = function() {
    let a=2, b=8;
    console.log(a + b);
}