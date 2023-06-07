const array1 = [1, 4, 9, 16];

// pass array1 to the map function
// map function returns a new array
// it will multiply each element by 2
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

array2 = ["2", "3", "4"]
// map function returns a new array
// it will convert each element to a number
// Number() and parseInt() are two ways to convert a string to a number
const map2 = array2.map(x =>Number(x));
const map3 = array2.map(x =>parseInt(x));

console.log(map2);
console.log(map3);

// => is used here to call the function
const convertIntVal = (val) => {
    console.log("HI, " + val); 
    return parseInt(val, 10);
}

const map4 = array2.map(convertIntVal);
console.log(map4);
// [2,3,4]


const arr3 = ["Two", "11"];
// unary operator (+) does implicit conversion to a number
const arra2_con = arr3.map((item) => +item);
console.log(arra2_con);