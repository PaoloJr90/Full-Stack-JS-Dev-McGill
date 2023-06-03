

const promiseFunction = (something) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(something);
        }
            , 1000);
            console.log("hello");
    });
};

promiseFunction("hello");

// to show the pending state of the promise in the console, we can use the following code:
// console.log(promiseFunction("hello"));