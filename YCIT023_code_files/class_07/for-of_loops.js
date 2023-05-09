// for-of creates a loop on iterable objects (arrays, strings, maps, sets, etc.)
// for (valueInitializationof array ) {
//    statements
// }
// used if there is a need to iterate through data items of an iterable. Outputs the element of each member of the iterable.

// for-of loop with several built-in iterables

// looping through characters of a string
for (let i of "String")
    console.log(i);

// looping through key-value pairs of a Map
let m = new Map();
m.set("a", 1).set("b", 2);

for (let [i, j] of m)
    console.log(`${i} -> ${j}`);

// looping through elements of an array of arrays
for (let [i, j, k] of [[4, 5, 6], [1, 2, 3]])
    console.log(i, j, k);

    
