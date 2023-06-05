var func = function(resolve, regect){
    console.log('in func');
    resolve(10);
}

var promise = new Promise(func);
promise
    .then(val => {
        console.log(val);
    });
