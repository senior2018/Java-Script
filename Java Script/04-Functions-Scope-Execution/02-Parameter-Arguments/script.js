//Default Parameters
function registerUser(user) {
    return user + 'is registered';
}

console.log(registerUser('John '));

//Similar
function regUser(name = 'Hanna') {
    return name + ' is my name.';
}

console.log(regUser());

//Rest Parameters..

//return the results in array form
function sum(...numb) {
    return numb;
}

console.log(sum(1, 2, 3));

//To get sum of numbers passed as argument
function sam(...number) {
    let total = 0;

    for (const num of number) {
        total += num;
    }
    return total;
}

console.log(sam(1, 2, 3, 4, 5));





//Object as parameter
function loginUser(user) {
    return `The user ${user.name} with id of
    ${user.id} is logged in`;
}

//Definition of parameter
const user = {
    id: 1,
    name: 'John',
};

//calling a function by passing the argument name
console.log(loginUser(user));

//same as by passing the object members
console.log(loginUser({ id: 2, name: 'Sara', }));





//Array as parameters


// function getRandom(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);

//     const item = arr[randomIndex];

//     console.log(item);
// }

// getRandom([1,2,3,4,5,6,7,8,9,10]);


//same as using rest operator
function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

