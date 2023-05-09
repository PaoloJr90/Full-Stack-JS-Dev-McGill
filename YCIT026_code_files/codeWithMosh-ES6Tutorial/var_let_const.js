// var --> scoped to the function
// let --> scoped to the block. Can be reassigned
// const --> scoped to the block. Cannot be reassigned

function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
  // ReferenceError: i is not defined, if var is replaced with let
  // var is accessible outside the block, let is not
}
sayHello();

const x = 1;
x = 2;
// TypeError: Assignment to constant variable.
// const cannot be reassigned
