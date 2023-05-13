class User {
  #nameValue;
  // name
  constructor(name) {
    this.name = name;
  }
  get name() {
    return "Hello " + this.#nameValue;
  }
  set name(name) {
    console.log("abcd");
    if (name === "") {
      throw new Error(`name field of User cannot be empty`);
    }
    this.#nameValue = name;
  }
}

const user1 = new User("Jorge");
console.log("user1", user1);
console.log("user1.name", user1.name);
user1.name = "Jason";
console.log("user1.name", user1.name);
user1.name = "Juan";
console.log("user1.name", user1.name);

// const user2= new User('');
