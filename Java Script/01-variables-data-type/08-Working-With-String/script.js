//Initialization & Declaration
let x, y;

const name = 'Samwel';
const age = 30;

//Two ways of console
// 1.

x = 'Hello my name is ' + name + ' and I am ' + age + ' years old';

console.log(x);

// 2. using template literals
y = `Hello my name is ${name} and I am ${age} years old.`;

console.log(y);

// PROPERTIES AND METHODS
let s = 'Hello Samwel!'


//length of a string
x = s.length;

console.log(x);

//accessing element by key
x = s[0];

console.log(x);

//properties and methods of string
y = s.__proto__;

console.log(y);

//Uppercase & lowercase
x = s.toUpperCase();
y = s.toLowerCase();
console.log(x);
console.log(y);

//Character of a given index
x = s.charAt(0);

console.log(x);

//index of a certain character
x = s.indexOf('l');

console.log(x);

//Console some of a strings
x = s.substring(0, 5); //Start at index 0 and count 5 characters

console.log(x);

x = s.substring(6); //start from index 7 and console out the rest character

console.log(x);

//console some character in oposite way
//starting from front to backward
x = s.slice(0, 5);

console.log(x); //similar to substring but

x = s.slice(-10, -1);

console.log(x);

//Removing useless spaces
let c = '        Hello Juma!';

x = c.trim();

console.log(x);

//Replacing a string or some character with another string or character
x = c.replace('J', 'My love! ');

console.log(x);

//Chake if character are there in a string
x = c.includes('ell');

console.log(x); //Return true/false

//Divides a given string
x = s.split(' '); //after split it convert it to array
                    //it will be an array of two items

console.log(x);

//return the value of
x = s.valueOf();

console.log(x);