const array1 = ['item1', 'item2', 'item3', 'item4'];

// map method creates a new array with the results of calling a function for every array element.
const result = array1.map((item, index) => {
    if (index == 1 || item > 'item2') {
        return false;
    }
    return true;
});

console.log('result', result);


// filter method creates a new array with array elements that passes a test.
const result1 = array1.filter((item, index) => {
    if (index == 1 || item > 'item2') {
        return false;
    }
    return true;
});

console.log('result1', result1);


// find method returns the value of the first element in an array that pass a test (provided as a function).
const result2 = array1.find((item, index) => {
    if (index == 1 || item > 'item2') {
        return false;
    }
    return true;
});

console.log('result2', result2);

const result4 = array1.map((item, index) => {
   return `prefix_${item}_postfix`
});

console.log('result4', result4);






