input_array = [5, 4, 2, 7, 9, 3];

let sum = 0;

// see: for-in loop and for-of loop

for (let x in input_array) {
    sum += input_array[x];
  console.log(input_array[x]); // x is the index
}

console.log(sum);

console.log("-----------------------------");

for (let x of input_array) {
  console.log(x); // x is the value
}

console.log("-----------------------------");

// never ending loop
let sum2 = 0;

while(true)
{
    sum += 1;
}

console.log(sum);
