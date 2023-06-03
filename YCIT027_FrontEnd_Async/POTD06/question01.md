
# explain the output of the following code

```javascript
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
```

## Answer

- func1() and func2() are defined and stored in memory
- a variable `promise` is declared and assigned the value of the function call `func1()`
- func1() is called in the first instance of the Promise-chain; it runs and returns a Promise
- it first resolves after 1 second and prints "Hello" (`console.log(result1)`)
- it then returns a call to func2()
- func2() runs and returns a Promise
- func2() resolves after 1 second and prints 50 (`console.log(result2)`) inside the second Promise chain (`.then(function(result2)`
- then it `returns result2%10` which equals 0
- this returned value is then pushed into the next Promise chain (`.then(function(result3)`)
- result3 is print 0 (`console.log(result3)`)
- the Promise chain ends; execution completes
