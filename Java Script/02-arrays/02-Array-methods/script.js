//BASIC ARRAY METHODS
const array = [34, 56, 98, 76, 50];

//adding value at end of array
array.push(100); //100 will be added in array
 
console.log(array);

//Removing value at the end
array.pop(); //100 will be removed from array

console.log(array);

//Adding element at the beggining
array.unshift(99); // 99 will be addid at the beggining of array

console.log(array);

//Removing element at the beggining
array.shift(); //99 will be removed

console.log(array);

//Reversing of arrays
array.reverse();

console.log(array);

//Check element in array if is there
x = array.includes(98); //return true of false

console.log(x);

//Checking the index of an alement
x = array.indexOf(50); //Due to reversing index is 0

console.log(x);

//console element staring at a certain index
x = array.slice(1);

console.log(x); //start from index 1 to the end

x = array.slice(1, 3); //start from index 1 to index 2

console.log(x);

//Removing the element from array
x = array.splice(1, 3);

console.log(x); //Return the element of index 1, 2, and 3
                //but removes them from the generat array
                //Return the removed item
                
console.log(array); //return the remained array from splice

//Converting array into string
x = array.toString();

console.log(x, typeof x);

//Chained method
const game = [12, 64, 876, 098, 47];

x = game.splice(1, 3).reverse().toString().charAt(0);

console.log(x, typeof x);
