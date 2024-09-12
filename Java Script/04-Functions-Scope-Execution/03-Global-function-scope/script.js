//Global Scope
//They are initialized outside the function and
//can be accessed inside the function
const x = 100;

console.log('outside before the function');
console.log(x); //This will give you 100

function run() {
    console.log('Inside the function');

    console.log(x);
}

run();

console.log('outside after the function')
console.log(x);




//Function Scope
//THey are declared inside the function
//and cannot be accessed outside the function
function add() {
    const y = 50;

    console.log(y);
}

add(); //Y will be consoled

// console.log(y); //This will give error results