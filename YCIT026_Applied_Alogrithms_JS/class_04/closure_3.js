// outer function greeting.
function greeting(type) {
  // inner function welcomeFn. it is a closure.
  // it has access to the variable "type".
  // const welcomeFn = (user) => {
  //     console.log(`${type} ${user}! This is our application.`);
  // }
  // return welcomeFn;

  // inner function can also be written, using arrow function syntax, as:
  return (welcomeFn = (user) =>
    console.log(`${type} ${user}! This is our application.`));
}

// The function greeting returns a function that is assigned to the parameter welcome.
const welcome = greeting("Welcome");
// The variable welcome is a function that is called with the argument 'Mario'.
welcome("Mario"); // Welcome Mario! This is our application.
// The variable welcome is a function that is called with the argument 'Emily'.
welcome("Emily"); // Welcome Emily! This is our application.

// The function greeting returns a function that is assigned to the parmater hello.
const hello = greeting("Hello");
// The variable hello is a function that is called with the argument 'Mario'.
hello("Mario"); // Hello Mario! This is our application.
// The variable hello is a function that is called with the argument 'Emily'.
hello("Emily"); // Hello Emily! This is our application.
