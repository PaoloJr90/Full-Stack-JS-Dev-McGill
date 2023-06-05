

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTest = [];
let arrayTest2 = "";

const processData = (something) => {
    if (!Array.isArray(something) || something.length === 0) {
        return console.error("Input parameter must be an array object and length must be >= than 1")
    } else {
    let newArray = [];
    const newArrayCalc = array.forEach(element => {
        newArray.push(element * 2);
    });
        return newArray;
    }
};


const logData = async (somethingElse) => {
    try {
        const result = await processData(somethingElse);
        if (result === undefined) return console.log("Error in processData function");
        else return console.log(result);

    } catch (someError) {
        console.log("Some other error");
    }
};

logData(array);
// logData(arrayTest);
// logData(arrayTest2);