const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// define a callback function. this function will be passed to the forEach method.
const callbackFn = (item, index) => {
  console.log("index: ", index);
  console.log("item: ", item);
};

// call the forEach method on the array.
// the forEach method will call the callback function for every item in the array.
// the forEach method will output the item based on the index of the array.
arr1.forEach(callbackFn);
