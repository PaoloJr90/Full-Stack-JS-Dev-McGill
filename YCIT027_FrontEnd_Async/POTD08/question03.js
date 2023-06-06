// displaying numbers 0-9 sequentially using async/await

const sleep = (i) => {
    // random delay between 0 and 6 seconds
    const ms = Math.floor(Math.random() * 4000);
    console.log(`wait ${ms} ms before printing:`)
    return new Promise(resolve => setTimeout(() => resolve(i), ms));
}

// async function to print numbers 0-9 sequentially
// it will wait for the sleep function to finish before printing the next number
async function printNumbers() {
    for (let j = 0; j < 10; j++) {
        const result = await sleep(j);
        console.log(result);
    }
    }

printNumbers();
