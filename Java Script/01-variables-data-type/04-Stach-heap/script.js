// primitive Values are stored on the stack
const name = 'John';
const age = 30;

let newName = name;
newName = 'neema'; //updates the new name only

console.log(newName, name);

//Reference value are stored on heap
const person = {
    name: 'Ema',
    age: 40
};

let newPerson = person;
newPerson.name = 'Brian'; //updates both person & newPerson


console.groupCollapsed(person, newPerson);