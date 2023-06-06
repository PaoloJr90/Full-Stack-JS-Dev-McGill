# what will be the output of the following code?

```javascript
function func1(num) {
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(num);
    }, 1000);
  });
}

async function multiply(num) {
  const x = func1(10);
  const y = func1(3);
  return num * await x * await y;
}

multiply(10).then(function(result){
  console.log(result);
}); 
```

- func1 and multiply functions are defined and stored in memory.
- multiply function is called with 10 as argument and returns two promises.
- the promises being that which are given in the multiply function `return num * await x * await y;`
- the promises (`func1(10)` and `func1(3)`) are resolved after 1 second (`setTimeout(function(){resolve(num);}, 1000);`).
- they are resolved concurrently - the `await` keywords are in the returned expression, not in the function body.
- they are stored in the variables `x` and `y` respectively.
- once the promises are resolved, `multiply(10)` returns `10 * 10 * 3` 
- the `then` function is called with the result of the promises as argument.
- the result (300) is logged to the console after 1 seconds.

