const person = {
  name: "Mosh",
  walk() {
    console.log(this); // this is a reference to the current object (person)
  },
};
person.walk();
// returns a reference to the person object. the walk method is a method of the person object

const walk = person.walk;
console.log(walk);
walk(); // this is undefined, because walk is a standalone function, not a method of an object
