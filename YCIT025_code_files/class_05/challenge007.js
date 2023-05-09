let a = { a: 1 };
let b = { a: 1 };
let c = a;

console.log('a === b', a === b); // false.  a and b are different objects. They are each stored in different memory locations
console.log('a === c', a === c); // true. a and c are the same object. They are stored in the same memory location

// more examples of object equality in javascript
const dog = { a: {} };
const cat = { a: dog.a };

console.log(dog == cat); //false
console.log(dog.a == cat.a); //true
console.log(dog.a === cat.a); //true