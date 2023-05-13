// object exercise
o = {};
o["passed"] = false;

failures = [];
failures.push("A");
failures.push("B");

o["failures"] = failures;

console.log(o);

x = {
    passed: false,
    failures: ["A", "B"]
};

// another object example.
const t ={'key1': "user", 'key2': "Guest"}

console.log(t['key2']); 