// importing the lodash package into the file
const _ = require('lodash');

const obj1 = {};
const obj2 = {};
const obj3 = obj1;

console.log('obj1 == obj2', obj1 == obj2);
console.log('obj1 === obj2', obj1 === obj2);
console.log('obj1 == obj3', obj1 == obj3);
console.log('obj1 === obj3', obj1 === obj3);

console.log("================================================");

// challenge question:
const dog = { a: {} }
const cat = { ...dog }
console.log('cat === dog', cat == dog); // false. cat and dog are different objects. They are each stored in different memory locations
console.log('cat === dog', cat === dog); // false. cat and dog are different objects. They are each stored in different memory locations

console.log('dog', dog);
console.log('cat', cat);
console.log('cat.a == dog.a', cat.a == dog.a);
console.log('cat.a === dog.a', cat.a === dog.a);

console.log('================================================');

// JSON.stringify and JSON.parse are used to create a deep copy of an object
// console.log('JSON.stringify(dog)', JSON.stringify(dog));
// console.log('JSON.parse(JSON.stringify(dog))', JSON.parse(JSON.stringify(dog)));
const catDeep = JSON.parse(JSON.stringify(dog));

console.log('catDeep == dog', catDeep == dog);
console.log('catDeep === dog', catDeep === dog);
console.log('catDeep.a == dog.a', catDeep.a == dog.a);
console.log('catDeep.a === dog.a', catDeep.a === dog.a);

console.log("================================================");
// _.cloneDeep is a lodash function that creates a deep copy of an object
const catDeep2 = _.cloneDeep(dog);w

console.log('catDeep2 == dog', catDeep2 == dog);
console.log('catDeep2 === dog', catDeep2 === dog);
console.log('catDeep2.a == dog.a', catDeep2.a == dog.a);
console.log('catDeep2.a === dog.a', catDeep2.a === dog.a);
//
