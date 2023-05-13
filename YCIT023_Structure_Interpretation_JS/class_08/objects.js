o = {};
o["passed"] = false;

failures = [];
failures.push("A");
failures.push("B");

o["failures"] = failures;

console.log(o);

// this object is the same as the one above
x = {
    passed: false,
    failures: ["A", "B"]
};

console.log(x);