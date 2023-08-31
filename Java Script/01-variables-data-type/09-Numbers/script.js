let x;

const num = new Number(5);

console.log(num, typeof num); //type of in number

//To view more function of number
console.log(num);

//converting to object
const nam = new Number(5);

console.log(nam, typeof nam); //typeof is object

//converting number to string
x = num.toString();

console.log(x, typeof x);

//Counting number of digits
x = num.toString().length;

console.log(x);

//Set the number of decimals
x = num.toFixed(2)

console.log(x); //Returns number with two decimal places.

//Set to total number of digits
x = num.toPrecision(5)

console.log(x); //return the number with total of 5 digits
                //Other are added as decimals
                
//Set a number to exponential function
x = num.toExponential(10);

console.log(x);

//
x = num.toLocaleString('ar-EG');

console.log(x);

//Getting MAXIMUM number
x = Number.MAX_VALUE;

console.log(x);

//Getting MINIMUN posible Number
x = Number.MIN_VALUE;

console.log(x);

//
x = Number.MAX_SAFE_INTEGER;

console.log(x);