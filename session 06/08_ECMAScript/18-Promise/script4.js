
let DoubleAfterTwoSec = (x) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(x * 2), 2000);
    });
}

// let addAsync = (x) =>
//  new Promise((resolve) => {
//     return DoubleAfterTwoSec(10).then((a) => {
//             DoubleAfterTwoSec(20).then((b) => {
//                 DoubleAfterTwoSec(30).then((c) => {
//                     resolve(x + a + b + c);
//                 });
//             });
//         });
//     });


async function addAsync(x) {
    let a = await DoubleAfterTwoSec(10);
    let b = await DoubleAfterTwoSec(20);
    let c = await DoubleAfterTwoSec(30);

    return x + a + b + c;
}

addAsync(10).then(sum => console.log(sum));
