let age = 20;

if (age > 18) {
    console.log("You can vote");
}
else {
    console.log("You cannot vote");
}

let age2 = 19;
//second method of if else
console.log(age2 > 18 ? "You can vote" : "You cannot vote"); // Ternary Operator

// condition ? true : false
let age3 = 19;
let can_vote = age3 > 18 ? true : false; // Ternary Operator
// same as
let can_vote2 = age3 > 18;

console.log(can_vote);
console.log(can_vote2);

// condition ? "true" : "false"
console.log(false !== !true);
console.log(false && (1 + 2));