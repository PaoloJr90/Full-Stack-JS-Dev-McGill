const countUpAndDown = (n) => {

    console.log('Going UP!');

    for (let i = 0; i < n; i++) {
        console.log(i)
    }
    console.log('At the top!\ Going down...');
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log('Back down, Done!');

};