// basic for loop --> for (initialization; condition; increment) { 
//    code to be executed }
// this loop's repeated code will be executed as long as the condition is true
// used if counters/indexes are needed while accessing an array or indexes' related logical stuff are present.


// example of for loop without internal expressions/conditions
let x = 0;
for (;;) {
    console.log(x++); 
    if (x == 3) break;
}
// output: 0 1 2

// example of for loop with internal expressions/conditions
let b = 0;
for (let b = 5; b <= 7; b++) {
    console.log(b);
}
// output: 5 6 7

// example of for loop without an internal incremental expression
// array A will be grown dynamically
let A = [4, 5, 6, 7, 5];
for (let i = 0; A.length < 10;) {
    A.push(A[i]);
    i++;
}
console.log(A); // output: [ 4, 5, 6, 7, 5, 4, 5, 6 ]


// for loop. Increment a variable by 1 until it reaches a certain value (10 in this case).
for (a = 0 ; a <= 10 ; a++) {
    console.log(a);
}
// -------------------------------
for ( let a = 10 ; a >= 0 ; a-- )
{
    console.log(a);
}
// -------------------------------
const my_array = ["Apple", "Banana", "Orange", "Pear"] 

// display all elements of my_array
for (let i = 0; i < my_array.length; i++) {
    console.log(my_array[i]);
}

// average length of words in my_array
let total_length = 0;

for (let i = 0; i < my_array.length; i++) {
    console.log(my_array[i]);
    total_length += my_array[i].length;
}

console.log("Average = " + (total_length / my_array.length));