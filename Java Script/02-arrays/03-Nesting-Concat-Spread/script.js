const fruit = ['Apple', 'Peer', 'Orange'];

const berries = ['straw', 'blub', 'rabs'];


let x;

//Using spread operators
x = [...fruit, ...berries];

console.log(x);//Gives an array of siv element (fruit + berries)

//Inserting array into array (NESTING)
x = fruit.push(berries);

console.log(fruit); //berries will carry index of 3 inside fruit array

//Accessing berries in fruit array
x = fruit[3];

console.log(x);

//Accessing element of barries
x = fruit[3][2];

console.log(x); //rabs will be consoled

//Other way of Nesting
const allFruits = [fruit, berries]; //Two arrays will be consoled

console.log(allFruits);

//Accessing one element of berriers
x = allFruits[1][2];

console.log(x); //rabs will be consoled

//Flatten Arrays
const arr = [1, 2, [3, 4], [6, 7], 8];

console.log(arr); //Gives array of 5 elements



//STATIC METHOD OF ARRAY
//Checking if is array
x = Array.isArray(berries);

console.log(x); //Return true/false

//Creating array from any data type i.e string
x = Array.from('123456');

console.log(x); //Create array of six elements

//Creating array from different variables
const a = '1';
const b = 'Sammie';
const c = true;

x = Array.of(a, b, c);

console.log(x);