//JSON is a format for storing and transporting data.
//Often used when data is sent from a server to web page

//JSON === JavaScript Object Notation
//Is a lightweight dat interchange format
// IS a language independent
// is "self-describing" and easy to understand

//JSON SYNTAX RULES
// 1. DATA IS IN NAME/VALUE PAIRS
// 2. Data is separated by comma
// 3. Curly braces hold objects
// 4. Square brackets hold arrays

//JSON has its own file extansion
//i.e todo.json (look into tod.json)


//CONVERTING OBJECT TO JSON

const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};

console.log(post, typeof post);



//convert into JSON string
const str = JSON.stringify(post);

console.log(str, typeof str);



//You cannot access any member unless you parse in

console.log(str.id); // result to undefined



//parse JSON (Local storage storing strings)
const obj = JSON.parse(str);

console.log(obj, typeof obj);



//You cannot access any member unless you parse in

console.log(obj.id); // result to 1



//It can also be nested array
const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post two',
        body: 'This is the body',
    },
];


//convert into JSON string
const sti = JSON.stringify(posts);

console.log(sti, typeof str);

