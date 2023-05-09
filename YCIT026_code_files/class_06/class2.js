const var1 = new String("var1");
console.log(var1);
console.log("var1 instanceof String", var1 instanceof String);

class User {
  constructor(name, family) {
    const abdc = 11; // this is a local variable
    console.log(name, family);
    this.name = name; // this will refer to the object that is created
    this.family = family; // this will refer to the object that is created
  }
  phone = 1234; // this is a property
  name = ""; // this is a property
  family = ""; // this is a property

  hello() {
    console.log(`Hello ${this.name} ${this.family}`);
  }
}

console.log("=========================================");

const user1 = new User("Jason", "Jafari");

console.log("user1", user1);
console.log("user1 instanceof User", user1 instanceof User);
console.log("user1.phone", user1.phone);

const user2 = new User("Suhail", "Parry");
console.log("user2.phone", user2.phone);
console.log("user2", user2);

user1.hello();
user2.hello();
