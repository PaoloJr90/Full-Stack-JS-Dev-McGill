let counter = 0;
const myGreeting = () => {
  counter++;
  console.log(`Hello Class ${counter}`);
};
// setTimeout is used to call a function after a certain amount of time (milliseconds).
// setTimeout is used to call a function only once.
setTimeout(myGreeting, 1000);

// setInterval is used to call a function at a certain interval (milliseconds).
// setInterval is used to call a function repeatedly.
// setInterval continues to call the function until clearInterval() is called or the window is closed.
// setInterval(myGreeting, 1000);

// this gets executed first since it is in global scope.
// other code is in function scope. Therefore will be executed second to global scope
console.log("I ");
console.log(counter);

setTimeout(() => {
  console.log("Love ");
}, 1000);
console.log("Javascript");
