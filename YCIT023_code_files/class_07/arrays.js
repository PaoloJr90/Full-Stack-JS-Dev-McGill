a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// value at index 6 will be replaced with "A"
a[6] = "A";

console.log(a);

// example of an array with a hole in it
var a1 = [,,];
console.log(0 in a1);

// includes() is a method of the Array class. It returns true if the array contains the specified element.
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // true