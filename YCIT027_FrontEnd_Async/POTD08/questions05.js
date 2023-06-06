
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTest = [];
let arrayTest2 = "";

const processData = (something) => {
        return new Promise((resolve, reject) => {
    if (!Array.isArray(something) || something.length === 0) {
       reject("it must be an array object with length >= 1")
    } else {
        
    let newArray = [];
    const newArrayCalc = array.map((element) => {
        element = element * 2;
        newArray.push(element);
    });
    resolve(newArray);
    }
    });
};


async function logData(somethingElse) {
    await processData(somethingElse)
    .then((value) => {
        console.log(`The new array is ${value}`);
    })
    .catch((error) => {
        console.log(`there is a problem with the input arugment: ${error}`);
    });
};

logData(array);
logData(arrayTest);
logData(arrayTest2);