function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total = total * i;
    }

    return total;

}

const result = factorial(5);

console.log(result);


