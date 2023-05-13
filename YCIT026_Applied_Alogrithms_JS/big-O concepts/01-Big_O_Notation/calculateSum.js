
const calculateSum = (n)=> {
    let sum = 0;
    for (let i = 1; i<= n; i++){
        sum += i;
    }
    return sum
}

console.log(calculateSum(2));
console.log(calculateSum(3));
console.log(calculateSum(10));
console.log(calculateSum(500));
console.log(calculateSum(8000000000));
