// use Pascal Notation for class names. Upper case first letters for each word.
// export Person class to be used in another module
export class Person {
  constructor(name) {
    // constructor is a special method for creating and initializing an object created with a class
    this.name = name;
    // this refers to the current object
  }
  walk() {
    console.log("walk");
  }
}
