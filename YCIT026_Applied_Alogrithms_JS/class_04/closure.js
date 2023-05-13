// closure is a function that remembers its lexical scope even when the function is executed outside that lexical scope.
// closure is a function that has access to the parent scope, even after the parent function has closed.
// closure is a function that has access to the outer function's variables even after the outer function has returned.
// closure = function + lexical scope --> a function inside another function.

// function outer() {
// 	return function inner() {
// 		alert("Hi");
// 	}
// }
// const x = outer();
// x();

// outer function
function outer() {
  const msg = "Hello";
  let counter = 0;

  // inner function has access to the outer function's variables.
  return function inner() {
    counter++;
    console.log("counter", counter);
    console.log("msg", msg);
  };
}

// outer function is called and the inner function is returned.
// the outer function is assigned to the variable show.
const show = outer();
// the outer function is assinged to the variable show1.
const show1 = outer();

show(); // Hello
show(); // Hello
show1(); // Hello
show1(); // Hello
