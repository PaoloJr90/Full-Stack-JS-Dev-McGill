let x = 5;
let y = true;

console.log(x !== 5); // false
console.log(x !== "5"); // true
console.log(x !== 8); // true

console.log(y !== 1); // true
console.log(y !== "1"); // true

// if type not equal *OR* value not equal

// Procedure: !=
// 1) are the types not equal? Yes? True --> Stop
// 2) are the values not equal? Yes? True --> Stop
// 3) False