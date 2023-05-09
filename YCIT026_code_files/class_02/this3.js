// function Person(name) {
//     this.name = name;
// }

// class Person{
//     constructor(name){
//         this.name = name;
//     }
// }

// const mario = new Person("Mario");
// const emily = new Person("Emily");

// console.log('mario', mario);
// console.log('emily', emily);
// console.log('mario.name', mario.name);
// console.log('emily.name', emily.name);

var name = "emily";

const obj = {
  name: "Jason",
};

function getName(family, age) {
  // this is referring to the obj (obj) in this case. A global object.
  // in a broswer, the global objext is [object Window]
  console.log(`Hello ${this.name} ${family} happy ${age}th anniversary`);
  // return this.name;
}

// getName();
// apply method is used to insert arguments into a function
// this method will insert the global object (obj) and array to be used as arguments
// with apply() method, you can write a method that can be used on different objects
// apply() method takes arguments as an array
getName.apply(obj, ["Jafari", "38"]);

// with call(), an object can use a method belonging to another object.
// call() method takes arguments separately.
getName.call(obj, "Jafari", "38");
