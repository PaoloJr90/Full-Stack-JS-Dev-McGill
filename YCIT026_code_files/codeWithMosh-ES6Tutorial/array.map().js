const colors = ["red", "green", "blue"];
const items = colors.map(function (color) {
  return `<li>${color}</li>`;
  // using backticks to create a template literal in ES6
});
// map() method will iterate over the array and return a new array with the same number of elements as the original array.
// map() method will not modify the original array.
// map() contains a callback function that will be called for each element in the array.

// ES6 arrow function syntax
const items1 = colors.map((color) => `<li>${color}</li>`);
// using backticks to create a template literal in ES6
