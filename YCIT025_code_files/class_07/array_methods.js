// push, pop, shift, unshift, splice array methods

// push is a method that can be used to add elements to the end of an array
// push takes 1 argument: the element to add. It can take multiple arguments. 
// It returns the new length of the array
// example:
const numbers0 = [1, 'two', 3, 'four'];
numbers0.push(5); // returns 5
console.log(numbers0);

// pop is a method that can be used to remove elements from the end of an array
// pop takes no arguments.
// It returns the removed element
// example:
const numbers1 = [1, 'two', 3, 'four'];
numbers1.pop(); // returns 'four'
console.log(numbers1);

// shift is a method that can be used to remove elements from the beginning of an array
// shift takes no arguments.
// It returns the removed element
// example:
const numbers2 = [1, 'two', 3, 'four'];
numbers2.shift(); // returns 1
console.log(numbers2);

// unshift is a method that can be used to add elements to the beginning of an array
// unshift takes 1 argument: the element to add. It can take multiple arguments.
// It returns the new length of the array
// example:
const numbers3 = [1, 'two', 3, 'four'];
numbers3.unshift('one'); // returns 5
console.log(numbers3);

// splice is a method that can be used to add or remove elements from an array
// splice takes 3 arguments: the index to start at, the number of elements to remove, and the elements to add
// It returns an array of the removed elements
// example:
const numbers4 = [1, 'two', 3, 'four'];
numbers4.splice(2, 1, 'one'); // returns [3]
console.log(numbers4);


