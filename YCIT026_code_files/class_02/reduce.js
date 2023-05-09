const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// The reduce() method executes a reducer function (that you provide) on each element of the array.
// The reduce() method returns a single value: the function's accumulated result.
// The reducer function takes four arguments:
// Accumulator (acc). This parameter is required.
// Current Value (cur). This parameter is required.
// Current Index (idx). This parameter is optional.
// Source Array (src). This parameter is optional.
const result = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(result);
