
const delayedUpperCase = (string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(string.toUpperCase());
            console.log(string.toUpperCase());
        }, 2000);
    });
};

delayedUpperCase("hello world");

// to show the pending state of the promise in the console, we can use the following code:
//console.log(delayedUpperCase("hello world"));