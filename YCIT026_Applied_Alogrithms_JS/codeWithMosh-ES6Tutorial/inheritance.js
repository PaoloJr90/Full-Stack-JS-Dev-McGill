class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}

class Teacher extends Person {
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

const teacher = new Teacher("Mosh", "MSc");
// teacher is an object instance of the Teacher class
