function exam(arg) {
    return new Promise(function(resolve, reject) {
        if (arg>50) {
            resolve('Pass');
        } else {
            reject('Fail');
        }
    });
}

let promise = exam(60);

promise.then(function(result) {
    console.log(result);

    return exam(20);
})

.catch(function(error) {
    console.log(error);

    return 'Error';
})

.then(function(result) {
    console.log(result);

    return exam(80);
})

.catch(function(error) {
    console.log(error);
});
