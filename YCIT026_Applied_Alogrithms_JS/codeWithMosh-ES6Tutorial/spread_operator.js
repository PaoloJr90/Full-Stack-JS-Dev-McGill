const first = [1, 2, 3];
const second = [4, 5, 6];

// typical way to combine two arrays
const combined = first.concat(second);

// using spread operator to combine two arrays
const combined1 = [...first, ...second];
// could also add an element to the combined1 array
const combined2 = [...first, "a", ...second, "b"];

const clone = [...first];
// clone is a copy of first array
console.log(first);
console.log(clone);

// using spread operator to copy an object
const first1 = { name: "Mosh" };
const second1 = { job: "Instructor" };
const combined3 = { ...first1, ...second1, location: "Australia" };
// combined3 is a copy of first1 and second1 objects
// also added a new property (location) to the combined3 object
console.log(combined3);
const clone1 = { ...first1 };
