// const calculateSum = (n) => {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//         console.log('iteration', i)
//     }
//     return sum
// } O(n)

// console.log(calculateSum(2));
// console.log(calculateSum(3));
// console.log(calculateSum(10));
// console.log(calculateSum(500));
// console.log(calculateSum(8000000000));

// refrence where this equation come from
const calculateSum2 = (n) => {
  let i = 0;
  console.log("iteration", i);
  return (n * (n + 1)) / 2;
}; // O(6) // O(10000000) // O(1)

console.log(calculateSum2(2));
console.log(calculateSum2(3));
console.log(calculateSum2(10));
console.log(calculateSum2(500));
console.log(calculateSum2(8000000000));
console.log(calculateSum2(9999999999999));

const arr1 = [1, 2, 3, 4, 5];

const newVal = arr1[2]; // O(1)

arr1.forEach(() => {}); // O(n)

const obj = {
  name: "Jason",
  family: "Jafari",
};

Object.keys(obj); // O(n)

const newVal2 = obj["name"]; // O(1)
