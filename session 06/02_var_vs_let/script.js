
// 1- `let` does not let you declare a variable twice. but `var` does

// (function () {
//     let fname = "Milad";
//     let lname = "Bahari";
//     //var age=50;

//     let fname = "Hasan";

//     let elem = document.querySelector('#greet');

//     elem.innerHTML = `Welcome ${fname} ${lname}`;
// })()

//2- `var` is scoped to the nearest function block and `let` is scoped to the nearest enclosing block
function checkScope() {
    "use strict";

    var n = 'hasan';

    n = 10;

    n = 10.55 + 10;

    n = { fname:'mohsen', age:'30', realage:2 };

    let x = n.fname;

    // console.dir(n);
    // console.log(x);


    let arr = [1,6, 'hasan', { fname:'hasan', lname: 'rahimi' }, function() { console.log('hi') }]

    // console.log(arr[0]);
    // console.log(arr[1]);
    // console.log(arr[2]);
    // console.log(arr[3].fname);
    // console.log(arr[4]());


    // console.log(typeof n);
    // console.log(typeof arr);
    
    arr.push(20);
    
    console.log(`length: ${arr.length}`);
    console.dir(arr);

    //x = arr.pop();

    {
        let i = "hello";
        var j = 15;        
    }

    //console.log(`i=${i}`);
    console.log(`j=${j}`);

}

checkScope();