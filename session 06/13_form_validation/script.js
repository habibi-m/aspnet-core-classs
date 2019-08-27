function validateForm() {
    var name = document.forms["myForm"]["fname"];

    if (name.value == "") {
        let elem = document.getElementById('error-msg');
        elem.innerText = 'Name must be filled out';
        return false;
    }
}