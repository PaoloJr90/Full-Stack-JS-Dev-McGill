function filterArray(arr, callback) {
  // Your code here
  // filter method uses callback function to filter the array
  // callback function returns true or false to determine if the element should be included in the returned array
  const filteredArray = arr.filter((num) => callback(num));
  return filteredArray;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const isEven = function (num) {
  return num % 2 === 0;
};
console.log(filterArray(numbers, isEven)); // Expected output: [2, 4]
