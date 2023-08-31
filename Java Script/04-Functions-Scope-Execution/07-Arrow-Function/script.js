//Syntax

// //Normal function declaration
// function add(a, b) {
//     return a + b;
// }

//can be re-write using arrow function
const add = (a, b) => {
    return a + b;
}

console.log(add(1, 2));

//can shorten as
const sub = (a, b) => a - b;

//a - b will be return
console.log(sub(10, 4));

//For single parameter () can be ignored
const double = a => a * 2;

console.log(double(5));

//returning an object
const createObj = () => ({
    name: 'brad',
    age: 30,
});

console.log(createObj());




//For each function
const number = [1, 2, 3, 4, 5];

number.forEach(function (n) {
    console.log(n);
});

//ForEach as arrow function
//(Arrow function in  callback)
number.forEach((n) => console.log(n));