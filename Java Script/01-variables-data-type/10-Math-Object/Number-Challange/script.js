let x, y;

x = Math.round(Math.random() * 100);

y = Math.round(Math.random() * 50);

console.log(x);

console.log(y);

const sum = x + y,
    difference = x - y,
    product = x * y,
    quotient = x / y,
    rm = x % y;

//Sum
const sumOutPut = `${x} + ${y} = ${sum}`;

console.log(sumOutPut);

//Difference
const differenceOutPut = `${x} - ${y} = ${difference}`;

console.log(differenceOutPut);

//Product
const productOutPut = `${x} * ${y} = ${product}`;

console.log(productOutPut);

//Quotient
const quotientOutPut = `${x} / ${y} = ${quotient}`;

console.log(quotientOutPut);

//Reminder
const rmOutPut = `${x} % ${y} = ${rm}`

console.log(rmOutPut);