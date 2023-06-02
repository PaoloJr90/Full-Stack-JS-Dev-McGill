
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

- func1() declaration gets hoisted to the top of the code
- this is why we can call func1() before it is declared (declared at line 23)
- func1() then goes through a Promise chain
- it first resolves after 1 second and prints "Hello" (`console.log(result1)`)
- func1() returns a call to func2() which is hoisted to the top of the code
- func2() goes through a Promise chain
- func2() resolves after 1 second and prints 50 (`console.log(result2)`) inside the second Promise chain (`.then(function(result2)`
- then it `returns result2%10` which is 0
- this returned value is then pushed into the next Promise chain (`.then(function(result3)`)
- result3 is printed which is 0 (`console.log(result3)`)
- the Promise chain ends
