// place counter in the global scope so that it can produce the desired result.
// after running function x times, the counter should be x.

// single "click" function.
// counter increases by 1 for every function call.
let counter = 0;
function clicked() {
	counter++;

	return counter;
}


// double "click" function.
// counter increases by 2 for every function call.
// counter increases based on the single "click" function's counter (output).
function doubleClick() {
    // this counter is initialized by the single "click" function's counter.
    // this counter will increase by 2 for every function call.
	counter++;
	counter++;

	return counter;
}


console.log(clicked()); // 1
console.log(clicked()); // 2
console.log(clicked()); // 3
// doubleClick counter increases by 2, initialized by the single "click" function's counter.
console.log(doubleClick()); // 5
console.log(doubleClick()); // 7