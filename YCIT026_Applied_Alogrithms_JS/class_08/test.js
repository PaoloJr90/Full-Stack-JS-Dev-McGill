// let animals = ['jaguar', 'eagle'];
// animals.filter(e => e === "jaguar")
// console.log(animals.pop()); //Prints jaguar

// let animals = ['jaguar', 'eagle'];
// const newArr = animals.filter(e => e === "jaguar")
// console.log(newArr.pop()); //Prints jaguar

// let animals = ['jaguar', 'eagle'];
// animals.pop();
// console.log(animals.pop()); //Prints jaguar

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };

// const obj2 = {
//     ...obj,
//     a: 0,
// };

// console.log(obj2.a, obj2.b);

// function printA() {
//     console.log(answer);
//     var answer = 1;
//     console.log(answer);
// }
// printA();
// printA();

// var start = 1;
// function setEnd() {
//   var end = 10;
//   console.log('abcd')
// }
// setEnd();
// console.log('zyw')
// ///
// console.log(end);
var diff;

const res1 = sum(10, 20);
console.log(res1);
const res2 = diff(10, 20);
console.log(res2);
function sum(x, y) {
  return x + y;
}

var diff = function (x, y) {
  return x - y;
};
