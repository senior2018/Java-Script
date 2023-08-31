//variable declaration can be decraled using
//var, let, const
// var & let work in a similar way

let firstName = 'samwel';
let lastName = 'Paul';
let age = 40;

console.log(firstName, lastName, age);

//Naming conventions
//- only letters, number, underscore and dollar signs
//- cant start with numbers

// let 1name = 'juma'; // invalid decralation

//valid declaration formats
//firstName - camelCase
//first_name = underscore
//FirstName = pascalCase
//firstname = lowercase

//Re-asign variables
//let & var can be re-asigned but const can not be re asigned

let score = 2;

console.log(score);

score = 3;

console.log(score); //output = 3

// const declaration can not be re-asigned i:e

const color = 'red';

console.log(color); //output = red

// color = 'green';

// console.log(color); // gives an error

// but in object

const person = {
    name: 'john',
    age: 30,
};

person.name = 'Emma'; // name will be updated

person.email = 'emma@gmail.com';  // email will be added to object

console.log(person);

//Decralation of multiple value at once
let a, b, c;
const d = 10,
    e = 20,
f = 30;

console.log(d, e, f);



