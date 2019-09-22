(() => {
    let user = {
        details: {
            name: {
                first: "Hamid",
                last: "Geledari",
            },
            jobs: [
                "Senior Full Stack Web Developer",
                "Freelancer"
            ]
        }
    }

    let firstName;

    // the old wrong approach
    firstName = user.details?.name?.first || 'Stranger'; 
    // wrong, when the left hand side of the OR expression evaluates to falsy (e.g. null, undefined, false, 0, empty string, …)
    // Or
    // the default value on the right hand side will be 'true';


    firstName = user?.details?.name?.first ?? 'stranger'; //  If the left side is undefined than personFirstName will get the value of the right side from


    document.write(`The user first name is ${firstName}`);

})();