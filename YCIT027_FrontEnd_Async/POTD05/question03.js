function calculate(num1, num2, callback) {
  // Your code here
  return callback(num1, num2);
}
// Example usage:
const add = function (a, b) {
  return a + b;
};
console.log(calculate(5, 3, add)); // Expected output: 8

//new example using arrow function
let calculate2 = (num1, num2, callback) => callback(num1, num2);

const add2 = (a, b) => a + b;

console.log(calculate2(5, 3, add2)); // Expected output: 8
