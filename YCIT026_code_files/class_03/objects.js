// creating an object literal using curly braces.
// object literal is a comma separated list of key-value pairs.
// key is a string identifier and value can be any valid JavaScript expression.
// keys and values are separated by a colon.
// key-value pairs are separated by a comma.
// key with special characters must be enclosed in quotes as shown below.
const obj = {
    '1keyStartsWithNumber': '...',
    'key/with/slashes': '...',
    'key-with-dashes': '...',
    'key with spaces': '...',
    '#&()[]{}èä樹keyWithSpecialChars': '...',
  };


// retrieving a value from an object literal
// use the dot notation to retrieve a value from an object literal.
// use the key as the identifier.
// if the key is not a single word, use the bracket notation.
const obj1 = { greeting: 'hello world' };
// dot notation
obj.greeting;
// => hello world

// use the bracket notation to retrieve a value from an object literal.
obj1['greeting'];
// => hello world

// Bracket notation also works with variables.
const key1 = 'greeting';
obj1[key1];
// => hello world


// adding or updating a key-value pair in an object literal
// dot and bracket notation can be used to add or update a key-value pair in an object literal.
const obj2 = { greeting: 'hello world' };

obj2.greeting = 'Hi there!';
obj2['greeting'] = 'Welcome.';
console.log(`first change =`, obj2);

// add a new key (newKey1) and a new value (new value 1) to the object literal.
// use the dot notation for first key (newKey1)
// use the bracket notation for second key (new key 2). it is not a single word.
obj2.newKey1 = 'new value 1';
obj2['new key 2'] = 'new value 2';
console.log(`second change =`, obj2);

// add a new key (key) and a new value (new value 3) to the object literal.
// key is not a single word, so use the bracket notation.
const key = 'new key 3';
obj2[key] = 'new value 3';
console.log(`third change =`, obj2);


// deleting an entry
// use the delete operator to delete an entry from an object literal.
const obj3 = {
    key1: 'value1',
    key2: 'value2',
};
// use the dot notation to delete an entry.
delete obj3.key1;
// use the bracket notation to delete an entry.
 delete obj3['key2'];


// checking if a key exists in an object literal
// use the hasOwnProperty method to check if a key exists in an object literal.
const obj4 = { greeting: 'hello world' };

obj4.hasOwnProperty('greeting');
// => true

obj4.hasOwnProperty('age');
// => false


// looping through an object literal
// use the for...in loop to loop through an object literal.
// the for...in loop iterates over the keys of an object literal.
const obj5 = {
    name: 'Ali',
    age: 65,
  };
  
  for (let key in obj5) {
    console.log(key, obj5[key]);
  }
  // name Ali
  // age 65