// classes help with inheritance
// classes are blueprints for objects
// classes are used to create objects that share methods and properties
// they help with code reusability, maintainability and organization

const person = {
  name: "Mosh",
};

// use Pascal Notation for class names. Upper case first letters for each word.
class Person {
  constructor(name) {
    // constructor is a special method for creating and initializing an object created with a class
    this.name = name;
    // this refers to the current object
  }
  walk() {
    console.log("walk");
  }
}

const person1 = new Person("Mosh");
// new operator is used to create an object from a class
// new operator will call the constructor method
