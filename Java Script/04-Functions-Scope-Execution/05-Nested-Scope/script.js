//NESTED SCOPE
//Function inside i function

//first is a parent function
function first() { 
    const x = 100;

    //second is a child function
    function second() {
        const y = 200;

        console.log(x); //x will be printed bcz a child function
                        //can access a parent variables

        console.log(y);
    }
    // console.log(y);  //this gives an error bcz
                        //variable for child function cannot be accessed 
                        //by parect variables

    second();   //A child function can be called inside
                //a parent function
};

first();

// second();    //you cannot call a child function
                //outside a parent function





//nested Scope is similar to if

if (true) {
    const x = 100;

    if (x === 100) {
        const y = 200;

        console.log(x + y);
    }

    console.log(x);
}