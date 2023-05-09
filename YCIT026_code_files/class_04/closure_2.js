function makeCounter(counterName) {
  let counter = 0;

  return function () {
    // counter is initialized by the makeCounter function's counter.
    // counter is incremented by 1 for every function call.
    counter++;
    console.log(`counter: ${counter} counterName: ${counterName}`);
  };
}

// The function makeCounter returns a function that is assigned to the variable counter1.
// parameter counterName ('counter1') is passed to the makeCounter function.
const counter1 = makeCounter("counter1");
// The function makeCounter returns a function that is assigned to the variable counter2.
// parameter counterName ('counter2') is passed to the makeCounter function.
const counter2 = makeCounter("counter2");

// the counter1 function is called 3 times. the counter increases by 1 for every function call.
counter1();
counter1();
counter1();

// the counter2 function is called 3 times. the counter increases by 1 for every function call.
counter2();
counter2();
counter2();
