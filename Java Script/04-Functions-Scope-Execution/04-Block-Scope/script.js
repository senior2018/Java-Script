//Block scope
//are similar to function scope
//that they operate only within a block

const x = 100;

if (true) {
    console.log('inside the block x can be consoled');
    console.log(x);

    //Some operation can be performed
    console.log(x + 200);
    
    const y = 400;
    console.log(x + y);

    var z = 200;
}

//But variable y cannot be accessed outside the block
// console.log(y); //this gives an error

//Const and let are block scope
//but var is not a block scope

console.log(x + z);