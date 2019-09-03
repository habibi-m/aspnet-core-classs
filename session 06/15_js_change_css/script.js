let elem = document.getElementsByTagName('h1');

//console.dir(elem);

elem[0].style.color = 'red';

let colorsList = ['red', 'blue'];
colorsList[2] = 'green';
colorsList[5] = 'tomato';

console.log(colorsList);  //['red', 'blue', 'green', empty * 2, 'tomato']