var firstname = "David";

console.log(firstname);
console.log(this.firstname);
console.log(`${this} will produce an empty object`);

var obj = {
  firstname: "John",
  getName() {
    return this.firstname;
    // this is the object obj
    // using this keyword inside the object will refer to the object itself
  },
};

console.log(obj.getName());
