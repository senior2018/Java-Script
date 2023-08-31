//Array of object
let x;

const todo = [
    { id: 1, name: 'Jonathan' },
    { id: 2, name: 'Daniel' },
    { id: 3, name: 'Zabron' },
];
    
//Accessing whole array
x = todo;

console.log(x); //return array of three objects.

//Accessing part of array
x = todo[0];

console.log(x); //Return object at index 0

//Accessing specific property of array
x = todo[0].name;

console.log(x);

//Object keys and put them into arrays
x = Object.keys(todo);

console.log(x);

//Counting the number of keys in the object
x = Object.keys(todo).length;

console.log(x);

//Get array of the values
x = Object.values(todo);

console.log(x);

//array of key-value pair
x = Object.entries(todo);

console.log(x);

//Boolean if object has a specific properties
x = todo.hasOwnProperty('name');

console.log(x);