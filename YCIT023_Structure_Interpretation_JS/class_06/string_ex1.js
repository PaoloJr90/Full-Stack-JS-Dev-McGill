// Name: John Doe

let fullName = "John Doe"; //First and last name

let first = fullName.slice(0, fullName.indexOf(" ")) ; // first name goes here, automatically.
let last = fullName.slice(fullName.indexOf(" ") + 1) ; // last name goes here, automatically.

console.log("First name: " + first);
console.log("Last name: " + last);

// other possible method
let nameSplit = fullName.split(" ");
let first2 = nameSplit[0];
let last2 = nameSplit[1];

console.log("First name: " + first2);
console.log("Last name: " + last2);

// another method
a = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(a[1][2])

b = [
    {'id': 1, 'fname': "Brendan", 'lname': "Wood",},
    {'id': 2, 'fname': "Brendan", 'lname': "Wood"},
    {'id': 3, 'fname': "Joe", 'lname': "Wood"},
    {'id': 4, 'fname': "Brendan", 'lname': "Wood"},
]

console.log(b[2]["fname"])
