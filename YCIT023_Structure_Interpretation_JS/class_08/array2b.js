let sum = 0;

const numbers = [65, 44, 12, 4];

// for each item in the array, call the function
// => is the fat arrow anonymous function that is used to call the function
numbers.forEach(x => sum += x);

// function myFunction(item) {
//     sum += item;
// }

console.log(sum);
