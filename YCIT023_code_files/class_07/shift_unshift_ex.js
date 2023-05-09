let a = [1, 2, 3, 4, 5];

// shift method removes the first element of the array and moves the rest of the elements to the left.
a.shift(0);
console.log(a);

// unshift method adds an element to the beginning of the array and moves the rest of the elements to the right.
a.unshift(6);
console.log(a);

// toString() is a method of the Array class. It returns a string representation of the array.
console.log(a.toString());

// set method is a method of the Array class. It returns a new array with all duplicate elements removed.
s = new Set([1,2,3]);
console.log(s);