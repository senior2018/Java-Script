//OBJECT
//Are common structure that holds key/Value pairs.

let x;

const Person = {
    name: 'Samwel Paul',
    Age: 30,
    Location: 'Tanzania',
};
 
//Accessing whole object
x = Person;

console.log(x);

//Accessing one member of object
x = Person.name;

console.log(x);

//Updating a member
Person.name = 'Senior Paul';

console.log(Person);

x = Person.Location = 'Dubai';

console.log(Person);

//Delete a member
x = delete Person.Location;
x = Person;

console.log(x);

//Adding a member
x = Person.city = 'London';

x = Person.hobby = 'Football';

x = Person;

console.log(x);

//OBJECT INSIDE OBJECT
const student = {
    Sname: 'Juma Shaban',
    Sage: 28,
    Scity: {
        Cname: 'New York',
        Cadress: 2345,
    },
    hobby: ['football', 'netball', 'Basketball'],
};

//accessing inside object
x = student.Scity;

console.log(x);

//accessing single member inside city
x = student.Scity.Cname;

console.log(x);

//accessing array inside the city
x = student.hobby;

console.log(x);

//Accessing one element of array

x = student.hobby[1];

console.log(x); //return the element a index 1 inside the array



//FUNCTION INSIDE OBJECT
Person.great = function () {
    console.log('Hello Senior');
    console.log(`My location is ${this.city}`);
    //"this" is used to access any variable within the object
};

Person.great(); //Calling a function 