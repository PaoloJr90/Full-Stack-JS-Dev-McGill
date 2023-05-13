import performanceCheck from "../functions/performanceCheck.js";

const calculateSum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum
}


const calculateSumPerformance = performanceCheck(calculateSum);


console.log(calculateSumPerformance(2));
console.log(calculateSumPerformance(3));
console.log(calculateSumPerformance(10));
console.log(calculateSumPerformance(500));
console.log(calculateSumPerformance(8000000000));
