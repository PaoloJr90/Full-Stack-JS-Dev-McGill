// import prefix is used to import a class from another module (person.js)
// ./ prefix is used to import a class from the same directory (relative path)
import { Person } from "./person";

// export prefix is used to export a class to be used in another module (person.js)
export class Teacher extends Person {
  // extends is used to inherit from another class
  constructor(name, degree) {
    // constructor requires a name parameter from the parent class
    // constructor requires a degree parameter for the Teacher class
    super(name);
    // constructor in a child class must call constructor of the parent class
    // super() method is used to call the constructor of the parent class
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}
