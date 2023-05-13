const person = {
  name: "Mosh",
  walk: function () {}, // function in an object is called a method
  talk() {}, // ES6 syntax for defining a method
};

// access the properties of an object
// dot notation
person.talk();
person.name = "John";

// bracket notation
const targetMember = "name";
person[targetMember.value] = "John";
// bracket notation is useful when you don't know the name of the property at runtime
