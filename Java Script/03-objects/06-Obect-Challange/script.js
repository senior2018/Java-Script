//Solution Step 1
let x;

const library = [{
    title: 'Java Script',
    author: 'Senior Paul',
    status: {
        own: true,
        reading: false,
        read: false,
    },
},
    {
        title: 'Html',
        author: 'Juma Andrew',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'CSS',
        author: 'Paul Umbe',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },

];

console.log(library); 

//Solution step 2
x = library[0].status.read = true;
x = library[1].status.read = true;
x = library[2].status.read = true;

console.log(library);



//Solution step 3
const { title } = library[0];

console.log(title);

//to rename tittle to firstBook
const { title: firstBook } = library[0];

console.log(firstBook);

console.log(library);




//Solution Step 4
const str = JSON.stringify(library);

console.log(str);