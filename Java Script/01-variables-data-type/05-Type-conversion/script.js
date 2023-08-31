//Converting one datatype into another

//Converting string into number
let amount = '100';
let name = 'Samwel';

// amount = parseInt(amount);
// amount = +amount;
//  amount = Number(amount);
name = parseInt(name);

console.log(amount, typeof amount);
console.log(name, typeof name); //Ontput in NaN i.e not a number

// Converting Number into String
let money = 100;

// money = money.toString();
money = String(money);

console.log(money, typeof money);

//Convert string into decimals
let mount = '99.5';
 
mount = parseFloat(mount);

console.log(mount, typeof mount);

//convert number to boolean
let pad = 1;

pad = Boolean(pad);

console.log(pad, typeof pad);

