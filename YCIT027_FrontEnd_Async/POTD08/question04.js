
const calculateFactorial= (numb) => {
        if (numb < 0 || typeof numb !== 'number') {
            return Error("Input parameter must be a positive number")
        }
    let factorial = 1;
       for (let i = 1; i <= numb; i++) {
            factorial = factorial * i;
        }
    return factorial;
};


const logFactorial = async (numb) => {
    const result = await calculateFactorial(numb);
    console.log(result);
};

logFactorial(5);
logFactorial(10);
// logFactorial(-2);
// logFactorial("hello");
// logFactorial(0);

