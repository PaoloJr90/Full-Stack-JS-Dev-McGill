# explain the output of the following code

```javascript
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
```

## Answer

- exam() is defined and stored in memory
- exam() is called with 60 as an argument and is executed with `promise.then` 
- exam(60) runs and returns a Promise
- exam(60) resolves after 1 second and prints "Pass" (`console.log(result)`)
- the first Promise chain returns with a call to exam(20)
- exam(20) executes and returns a Promise
- exam(20) rejects and prints "Fail" (`console.log(error)`)
- the second Promise chain returns with a string "Error"
- the return value "Error" in the .catch() means that the Promise chain is settled
- the Promise chain ends as there is no more .then() to call