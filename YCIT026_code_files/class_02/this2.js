const name = "David";
const aa = this;
const bb = this;
function getName() {
  // this keyword refers to an object
  // this keyword is not assigned a value until a function where it is defined is actually called.
  console.log("getName", this.name);
  console.log("getName", this);
  console.log("aa == this", aa == this);
}
getName();

// // console.log(this);

const getName1 = () => {
  console.log("getName1", this.name);
  console.log("getName1", this);
  console.log("bb === this", bb == this);
};
getName1();

const obj = {
  name: "John",
  getName: getName,
  getName1: getName1,
};

getName();
obj.getName();
getName1();
obj.getName1();

console.log("================================================");

const person = {
  name: "John",
  getName() {
    console.log(this);
    console.log(this.name);
  },
  returnItself() {
    return this;
  },
  returnItself1: function () {
    return this;
  },
  returnItself2: () => {
    return this;
  },
};

person.getName();

console.log(
  "person === person.returnItself()",
  person === person.returnItself()
);
console.log(
  "person === person.returnItself1()",
  person === person.returnItself1()
);
console.log(
  "person === person.returnItself2()",
  person === person.returnItself2()
);
console.log("person.returnItself2()", person.returnItself2());
