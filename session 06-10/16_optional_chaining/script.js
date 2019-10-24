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

    // firstName = user.details.name.first;
    // firstName = user.details.name.fullName; //undefined
    // firstName = user.details.person.first; // object reference error

    //Checking if firstName exists
    // if( user &&
    //     user.details &&
    //     user.details.person &&
    //     user.details.name ) {
    //         firstName = user.details.name.first || 'stranger';
    // }

    // The proper solution: 
    firstName = user?.details?.name?.first;

    document.write(`The user first name is ${firstName}`);


    //more examples

    // 1-Dynamic values
    //firstName = db.users?.[12]?.details.names.first;

    // 2- Function or method call
    //let currentJob = user?.details?.jobs.getCurrentJob?.(); // or .('arg1', 'arg2', '...', 'argN')



    //Start using it today
    //Right now no browser supports this out of the box — Babel to the rescue.

})();