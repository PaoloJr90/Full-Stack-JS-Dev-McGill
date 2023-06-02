var promise = func1();

promise

.then(function(result1) {
    console.log(result1);
    return func2();
})

.then(function(result2) {
    console.log(result2);
    return result2%10;
})

.then(function(result3) {
    console.log(result3);
});

function func1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Hello");
        }, 1000);
    });
}

function func2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(50);
        }, 1000);
    });
}