
(function () {

    let text = 'Welcome to jQuery22';

    // plain JavaScript
    // let elem = document.querySelector('#welcome');
    // elem.innerHTML = text;

    // jQuery
    $('#welcome').append(text);
})()



$(document).ready(() => {
    $('input[type="number"]').css({
        color: 'white',
        fontSize: '3em',
        width: '60px',
        border: '1px solid black',
        backgroundColor: 'black'
    });

    $('.btn').css({
        backgroundColor: 'black',
        color: 'white',
        width: '160px',
        fontSize: '1.5em',
        padding: '15px',
        margin: '25px auto 0px',
        border: '1px solid black',
        textAlign: 'center'
    });

    $('#game-board').css({
        backgroundColor: '#333',
        width: '300px',
        padding: '15px',
        border: '1px solid black',
        textAlign: 'center',
        margin: '0 auto',
        marginTop: '20px'
    });

    $('#game-board').hide();

    $("#start").click(() => {
        $('#game-board').show();
    });
})