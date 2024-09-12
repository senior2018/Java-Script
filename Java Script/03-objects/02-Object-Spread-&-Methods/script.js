//Creating Object Using constructor
let x;

const todo = new Object();

todo.id = 1;
todo.name = 'Jordan';
todo.age = 30;

x = todo;

console.log(x); //Gives the object of the above members.

//Nested Objects
const Person = {
    Pname: 'Jemma',
    pcountry: {
        city: {
            cname: 'Dubai',
            cordinate: {
                lat: 23718,
                lon: 65473,
            },
        },
    },
    age: 40,
};

//accessing whole object
console.log(Person);

//Accessing single object inside
x = Person.pcountry.city.cordinate.lat;

console.log(x); //lat will be consoled


//Spread operator
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = { d: 4, e: 5, f: 6 };

//Gives object with two object inside
let obj3 = { obj1, obj2 }; 
x = obj3;

console.log(x); 

//Combining two object as only one object
obj3 = { ...obj1, ...obj2 };

x = obj3;

console.log(x);

//Assign operator
//Combines two different object into 1

// Return abject of empty object
let obj4 = Object.assign({});

x = obj4;

console.log(x);

//Adding obj1 & obj2
obj4 = Object.assign({}, obj1, obj2);

x = obj4;

console.log(x);

