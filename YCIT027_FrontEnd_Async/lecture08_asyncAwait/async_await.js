function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         const randomNum = Math.random();
            if (randomNum < 0.5) {
                resolve(`Success: ${randomNum} is less than 0.5`);
            } else {
                reject(`Error: ${randomNum} is greater than 0.5`);
            }
        }, 2000);
    });
}

async function getData() {
    try{
        // `result` will be the resolved value of the promise
        const result = await fetchData();
        return result;
    }
    catch(error){
        // `error` will be the rejected value of the promise
        //console.error(error);
        throw error;
    }
}

getData()
    // result here is the resolved value of the promise
    .then(result => console.log(`${result}`))
    // error here is the rejected value of the promise
    .catch(error => console.error(`${error}`));
