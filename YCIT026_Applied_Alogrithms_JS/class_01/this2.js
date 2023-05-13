var name = "David";

function getName() {
  console.log(this.name);
}

const getName1 = () => {
  console.log(this.name);
};

const obj = {
  name: "John",
  getName: getName,
  getName1: getName1,
};

getName();
obj.getName();
// classic function has its own this
getName1();
obj.getName1();
// arrow function does not have its own this
console.log("================================================");

const person = {
  name: "John",
  getName() {
    console.log(this);
    // console.log(this.name);
  },
  returnItself() {
    return this;
  },
};

person.getName();
// the above statement will print the value from the name property of the person object
// it calls the getName method of the person object
// the getName method is a classic function
// the getName method has it own this value which is in the person object

console.log(
  "person === person.returnItself()",
  person === person.returnItself()
);
