
const calculateFactorial= (numb) => {
    return new Promise((resolve, reject) => {
        if (numb < 0 || typeof numb !== 'number') {
           // reject("Input parameter must be a positive number");
            throw Error("Input parameter must be a positive number");
        } else {
        let factorial = 1;
        for (let i = 1; i <= numb; i++) {
            factorial = factorial * i;
        }
        resolve(factorial);
    }
    });
};


async function logFactorial(numb) {
    await calculateFactorial(numb)
        .then((value) => {
            console.log(`The factorial of ${numb} (${numb}!) is ${value}`);
        })
        .catch((error) => {
            console.log(`the is a problem with ${numb} (${numb}!) : ${error}`);
        }
    );
};

logFactorial(5);
logFactorial(10);
logFactorial(-2);
logFactorial("hello");
logFactorial(0);

