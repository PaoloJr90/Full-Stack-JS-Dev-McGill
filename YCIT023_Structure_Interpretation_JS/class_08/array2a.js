let sum = 0;
const numbers = [65, 44, 12, 4];

numbers.forEach(myFunction);

// function to sum the elements of the numbers array
// item is the current element of the array being processed
// as forEach iterates over the `numbers` array
function myFunction(item) {
    sum += item;
}

console.log(sum);

// for-of loop iterating over the result of myFunction. 
for (let x of numbers) {
    myFunction(x);
}

a = {};
b = [];
c = {};
d = () => { console.log("Sup")};

console.log(typeof d);