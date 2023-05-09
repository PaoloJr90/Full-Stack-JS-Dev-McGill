// Arrow functions do not rebind the this keyword.

const person = {
  talk() {
    var self = this; // define a variable to hold a reference to the person object
    setTimeout(() => {
      console.log("this", this);
      // this returns a reference to the global object (window in the browser).
      // arrow functions do not rebind the this keyword.
    }, 1000);
  },
};
person.talk();
