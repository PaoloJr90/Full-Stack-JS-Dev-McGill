// Given an array and an integer, rotate the input array n positions.

let input = [1, 2, 3, 4];
console.log(input);

function challengeQuestion(array, integer) {
  for (let i = 0; i < integer; i++) {
    array.unshift(array.pop());
  }
  return array;
}

console.log(challengeQuestion(input, 2));
