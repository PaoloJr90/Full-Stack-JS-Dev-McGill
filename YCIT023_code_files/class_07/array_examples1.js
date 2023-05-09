// define an array
const arr = [1, 2, 3];

// push method adds an element to the end of the array
// push values 4 and 5 to the end of the array
arr.push(4);
arr.push(5);
console.log(`first array print after two push: ${arr}`);

// pop method removes the last element of the array
// remove the last element (5) of the array with pop method
let x = arr.pop();

console.log(`the value removed with pop = ${x}.`, `new array after pop: ${arr}`);

// unshift method does the opposite of push
// unshift method adds an element to the beginning of the array and moves the rest of the elements to the right
// add an element "A" to the beginning of the array
// unshift returns the new length of the array
let test = arr.unshift("A");
console.log(`length of the new array = ${test}.`, `new array elements = ${arr}`);

// shift method removes the first element of the array and moves the rest of the elements to the left
// result of shift method is the value that is moved
let myval = arr.shift()
console.log(`the value that is moved with shift method = ${myval}`, arr);

a = [1,2,3];    
b = [3,4];

// push method to add element at index 0 to array b
b.push(a[0]);
// shift method on array a to remove the first element at index 0
a.shift();

console.log(b);
console.log(a);