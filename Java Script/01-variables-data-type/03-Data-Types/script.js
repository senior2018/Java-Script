//Two types of data types
//Primitive datatypes & Reference datatypes

//PRIMITIVE DATATYPES
// strings
const firstName = 'Sara';

// Numbers
const age = 30;
const temp = 98.98;

//Boolean (true or false)
const hasKid = true;

//Null (an empty value) 
const aptNumber = null;

// undefined
let score;
const score1 = undefined;

// symbols
const id = Symbol('id');

// Big int
const n = 989893747483728n;



//REFERENCE DATATYPES
//Arrays
const numbers = [1, 2, 3, 4]


//Objects
const person = {
    name: 'juma',
    age: 30,
};

//Functions
function sayHello() {
    console.log('Hello');
} 
    
const output = sayHello;

console.log(output, typeof output);// typeof == gives the data type of output

