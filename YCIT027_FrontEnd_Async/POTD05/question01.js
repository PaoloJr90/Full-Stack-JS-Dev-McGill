const numbers = [1, 2, 3, 4, 5];

function displayResult(value) {
  console.log(value);
}

// callback is a function. It is passed as a parameter to another function.
// when multiplyByTwo is later called, it will run the displayResult function
function multiplyByTwo(numbers, callback) {
  for (let i = 0; i < numbers.length; i++) {
    let result = numbers[i] * 2;
    callback(result);
  }
}

// here the multiplyByTwo function is called with the numbers array and the displayResult function
// as arguments
multiplyByTwo(numbers, displayResult);
