function calcNumber() {

    const number = 42;
    
    //number = 10;
    const num2 = { n: 12 };

    //num2 = { n: 12, name:'hamid'};

    num2.n = 30;

    return num2.n;
}

console.log(calcNumber());

