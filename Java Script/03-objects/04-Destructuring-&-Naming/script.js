//Creating object from variables
let x;

const firstName = 'John';
const lastName = 'Mathew';
const age = 30;

// const person = {
//     'first name': firstName,
//     'last name': lastName,
//     age: age,
// };

//Can also be created as
const person = {
    firstName,
    lastName,
    age,
};

x = person.age;

console.log(x);

// Destructuring
const todo = {
    id: 1,
    name: 'Samwel',
    title: 'This is my Practice',
    city: {
        cname: 'tokyo',
    },
};

const { id, title } = todo; //This pull out item from object

console.log(id, title);

const { city: { cname } } = todo;

console.log(cname);



//DESTRUCTURING RENAMING
const { id: todoId, } = todo;

console.log(todoId);

//DESTRUCTURING ARRAY
const number = [23, 35, 657, 312, 876];

// //This console the first two numbers
// const [first, Second] = number;  

// console.log(first, Second);

//This console the first two number and all the rest
const [first, Second, ...rest] = number;  

console.log(first, Second, rest);
