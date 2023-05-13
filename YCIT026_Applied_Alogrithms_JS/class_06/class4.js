class User {
  name;
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Employee extends User {
  roles = [];
}
const employee1 = new Employee("John Smith");
console.log("employee1", employee1);
console.log("employee1.getName()", employee1.getName());

console.log("employee1 instanceof User", employee1 instanceof User);
console.log("employee1 instanceof Employee", employee1 instanceof Employee);
console.log("employee1 instanceof Object", employee1 instanceof Object);
console.log(typeof employee1);

class Developers extends Employee {
  labtops = [];

  getName() {
    return `Hello ${this.name}`;
  }
}
// employee1.name;      // => 'John Smith'
// employee1.getName(); // => 'John Smith'
// employee1.posts;     // => []

const dev1 = new Developers("Jorge Macana");

console.log("dev1 instanceof User", dev1 instanceof User);
console.log("dev1 instanceof Employee", dev1 instanceof Employee);
console.log("dev1 instanceof Object", dev1 instanceof Object);
console.log("dev1 instanceof Developers", dev1 instanceof Developers);
console.log(typeof dev1);
console.log(dev1);

console.log("employee1.getName()", employee1.getName());
console.log("dev1.getName()", dev1.getName());

class ContentWriter extends User {
  posts = [];
  constructor(name, posts) {
    super(name);
    this.posts = posts;
  }
}

const writer1 = new ContentWriter("Sara", ["post1", "post2"]);

console.log("writer1 instanceof User", writer1 instanceof User);
console.log("writer1 instanceof Employee", writer1 instanceof Employee);
console.log("writer1 instanceof Object", writer1 instanceof Object);
console.log("writer1 instanceof Developers", writer1 instanceof Developers);
console.log(
  "writer1 instanceof ContentWriter",
  writer1 instanceof ContentWriter
);
console.log(typeof writer1);
console.log(writer1);

console.log("writer1.getName()", writer1.getName());
