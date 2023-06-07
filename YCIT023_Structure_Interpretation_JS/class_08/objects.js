o = {};
// also written as
// o = new Object();
// o = Object.create(null);

// to pass key-value pairs to an object, use the following syntax
o["passed"] = false;

// create a new empty array
// then push two elements into it
failures = [];
failures.push("A");
failures.push("B");

// add the array to the object
o["failures"] = failures;

console.log(o);

// this object is the same as the one above
x = {
    passed: false,
    failures: ["A", "B"]
};

console.log(x);