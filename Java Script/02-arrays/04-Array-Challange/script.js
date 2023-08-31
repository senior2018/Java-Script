//CHALLANGE 1.
const arr = [1, 2, 3, 4, 5];

//Solution 1
arr.push(6);
arr.reverse();
arr.push(0)

console.log(arr);

// //solution 2
// arr.reverse();
// arr.unshift(6);
// arr.push(0);

// console.log(arr);


//CHALLANGE 2
let arr3;

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// //Solution 1
// arr1.pop();

// arr3 = [...arr1, ...arr2];

// console.log(arr3);

// //solution 2
// arr2.shift();

// arr3 = [...arr1, ...arr2];

// console.log(arr3);

// //Solution 3
// arr3 = arr1.slice(0, 4).concat(arr2);

// console.log(arr3);

//Solution 4
arr3 = [...arr1, ...arr2];
arr3.splice(4, 1);

console.log(arr3);