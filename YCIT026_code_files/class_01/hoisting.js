// JavaScript Hoisting
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
// JavaScript only hoists declarations (example: var y;), not initializations (example: y = 7;).
console.log("will result in", x);
// prints out undefined as the variable is hoisted
// hoisting is the process of moving all the variable declarations to the top of the scope
// the variable is used before it is declared
var x = "Hello";
console.log('will print variable (var) "x" = ', x);
// prints out "Hello" as the variable is defined after it is used
// this means the variable is hoisted to the top of the scope

welcome();
// prints out "Hello" as the function (below) is hoisted to the top of the scope
// function is defined without using var, let or const
// this means the function is hoisted to the top of the scope
function welcome() {
  console.log("function call (above) will print this");
}

// console.log(welcome22);
// welcome22();
// welcome22 is undefined as the function is not hoisted
// will result in a TypeError: welcome22 is not a function

var welcome22 = function () {
  console.log("Hello22");
  // prints out "Hello22" as the function is hoisted to the top of the scope
};
welcome22();

// console.log("will throw a reference error", y);
// let y = "Hello";
// using let variable before it is declared will throw a reference error
// y is called before it is defined

// welcome1();
// let welcome1 = () => {
//   console.log("Hello1");
// };
// ReferenceError as the function is defined using let and is not hoisted

// welcome2();
// let welcome2 = function () {
//   console.log("Hello1");
// };
// will result in a ReferenceError as the function is defined using let and is not hoisted

// welcome3();
// const welcome3 = function () {
//     console.log("Hello1");
// };
// will result in a ReferenceError as the function is defined using const and is not hoisted

// var color = 'Yellow';
// abcd()
// function abcd() {
//     // ...
//     if (typeof color === 'undefined') {
//         var color = 'Green';
//     }

//     console.log(color);
// };
