//To get more object & property on math
console.log(Math);

let x;

// Square root of a number
x = Math.sqrt(9);

console.log(x);

//Absolute of a number
x = Math.abs(-29.23);

console.log(x);

//round-off a number
x = Math.round(4, 984);

console.log(x);

//Rounding-off upward
x = Math.ceil(4.2);

console.log(x); //it will round upward no matter what a number

//Round downward
x = Math.floor(4.9);

console.log(x); //It will round downward

//Power of a Number
x = Math.pow(2, 5);

console.log(x); // equal to 2 power 5

//Checking the minimun number
x = Math.min(2, 4, 7, 1, 5);

console.log(x);

//checking the maximum number.
x = Math.max(2, 10, 30, 4, 6);

console.log(x);

//Consoling random numbers
x = Math.random();

console.log(x); //By default returns random Number of 0. decimals

x = Math.random() * 10;

console.log(x); //Return random decimal number from 0 - 9

x = Math.random() * 10 + 1;

console.log(x); //Return random decimal number from 0 - 10

x = Math.floor(Math.random() * 100 + 1);

console.log(x); //Return random whole number from 0 - 100