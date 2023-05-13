const array1 = [1, 2, 3, 4, 5]; // array store data in order, and can be accessed by index
const array2 = ['item1', 'item2', 'item3', 'item4'];

console.log('array1', array1);

console.log('=======================Classic For-loop======================================');

// can add debugger statement to debug the code. It will stop the code execution at the debugger statement
const otherArray = [];
for (let i = 0; i < array2.length; i++) {
    if (i ==1) {
        continue; // skip the current iteration. cannot put continue inside a function
    }
    const item = array2[i];

    if (item > 'item2') {
        break; // break the loop. cannot put break inside a function
    }
    otherArray.push(item);

    console.log('i=', i);
    console.log(`array1${i}=`, array1[i]);
    //debugger; 
}
console.log('otherArray', otherArray);


console.log('=========================For-of loop====================================');

let i = 0;
const otherArray1 = [];
for (const item of array2) {
   if (i == 1) {
       continue;
   }
    if (item > 'item2') {
        break;
    }
    console.log('i=', i);
    console.log(`item=`, item);
    i++;
    otherArray1.push(item);
}
console.log('otherArray1', otherArray1);


console.log('========================forEach loop=====================================');

// forEach method calls a function once for each element in an array, in order.
// arrow function is a short way to define a function.
array1.forEach((item, index) => { // array1.forEach(function(item, index, array) { ... });
    console.log(`item=`, item);
    console.log(`index=`, index);
});