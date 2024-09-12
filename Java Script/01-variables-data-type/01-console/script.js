console.log(100);

console.log('hello World!');

//variables
const x = 100;

console.log(x + 20);

//warning
console.warn('warning');

//error
console.error('alert');

//creating table
console.table({ name: 'samwel', email: 'samwel.massawe1111@gmail.com', age: 20 });

//group
console.group('simple'); //starting group
const y = 100;
console.log(y + 20);
console.table({ name: 'samwel', email: 'samwel.massawe1111@gmail.com', age: 20 });
console.groupEnd(); // ending of code

//adding some styles in js
const style = 'padding: 10px; background-color: white; color: green';

console.log('%cHello World', style); 
