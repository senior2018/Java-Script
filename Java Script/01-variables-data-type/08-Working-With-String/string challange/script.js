// //solution 1.
// let myNewString;

// const myString = 'developer';

// myNewString = myString[0].toUpperCase() + myString.substring(1);

// console.log(myNewString);

// //Solution 2.
// let myNewString;

// const myString = 'developer';

// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// console.log(myNewString);

//solution 3
let myNewString;

const myString = 'developer';

// myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

// OR

myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(myNewString);