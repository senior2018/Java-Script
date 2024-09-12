// Function Declaration
//function can be called before and after the function declaration
console.log(add$sign(100));

function add$sign(value) {
    return '$' + value;
}

console.log(add$sign(200));  

//Function Expression
//Function can be called just after function declaration
const addsign = function (value) {
    return '+' + value;
};

console.log(addsign(300)); //Cannot be placed before function