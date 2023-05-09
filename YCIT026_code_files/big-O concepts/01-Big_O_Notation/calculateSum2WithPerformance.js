import performanceCheck from "../functions/performanceCheck.js";

const calculateSum2 = (n) => {
    return n * (n + 1) / 2;
}

const calculateSum2Performance = performanceCheck(calculateSum2);


console.log(calculateSum2Performance(2));
console.log(calculateSum2Performance(3));
console.log(calculateSum2Performance(10));
console.log(calculateSum2Performance(500));
console.log(calculateSum2Performance(8000000000));
console.log(calculateSum2Performance(9999999999999));
