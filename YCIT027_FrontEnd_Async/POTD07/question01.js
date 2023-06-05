let array = [1, 2, 3, 4, 5];
let arrayTest = [];
let arrayTest2 = "";

const calculateSum = (something) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(something) || something.length === 0) {
            reject("Input parameter must be an array object and length must be >= 1");
    } else {
            let sum = 0;
            something.reduce((accumulator, currentValue) => {
                sum = accumulator + currentValue;
                return sum;
            }
            );
            resolve(sum);
        }
    });
};


let promise = calculateSum(array);
promise.then((result) => {
    console.log(result);
    return result;
})
.then((result) => {
    resultDoubled = result * 2;
    console.log(resultDoubled);
    return resultDoubled;
})
.catch((error) => {
    console.log(error);
    return error;
});


