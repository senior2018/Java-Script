//Creation of function
function SayHello() {
    console.log('Hello World!');
 }

 //Calling a function
SayHello();

//Function using return key

function Hello() {
    return 'Hello Javascript';

    //Any statement after return statement
    // will not be consoled
}

Hello();



//Function with parameters and arguments
function add(num1, num2) { //num1 and num2 are parameters
    return num1 + num2;
}

add(2, 5); //2 and 5 are arguments.

//In return the value will not be printed
//Instead it will be hold up

//to see the results of the function
const result = add(5, 5);

console.log(result);

//Also
console.log(add(12, 4));

