const fruits = ["Banana", "Orange", "Apple", "Mango"];
const numbers = [1, 2, 3, 4];

function concatenate(array1, array2) {
  if (!array1 || !array2) {
    return array1.concat(array1) || array2.concat(array2);
  }
  return array1.concat(array2);
}

let functionCall = concatenate(numbers, fruits);

console.log(functionCall);
