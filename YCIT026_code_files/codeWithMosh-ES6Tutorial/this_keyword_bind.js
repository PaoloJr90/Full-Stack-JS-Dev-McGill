// in JavaScript, functions are objects

const person = {
  name: "Mosh",
  walk() {
    console.log(this);
  },
};
person.walk();

const walk = person.walk.bind(person);
// bind() returns a new instance of the walk function, with the this keyword bound to the person object
walk();
