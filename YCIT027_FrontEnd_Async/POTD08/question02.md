# which options are true for the following code?

A) `multiply1` takes less time to execute than `multiply2`
B) `multiply2` takes less time to execute than `multiply1`
C) both `multiply1` and `multiply2` take the same amount of time to execute
D) both `await` calls in `multiply2` are concurrent
E) both `await` calls in `multiply1` are concurrent

```javascript
function func1(num) {
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(num);
    }, 2000);
  });
}

async function multiply1(num) {
  const x = await func1(10);
  const y = await func1(3);
  return num * x * y;
}

multiply1(5).then(function(result){
  console.log(result);
});

async function multiply2(num) {
  const x =  func1(10);
  const y =  func1(3);
  return num * await x * await y;
}

multiply2(5).then(function(result){
  console.log(result);
});
```

## Answer:

B) `multiply2` takes less time to execute than `multiply1`
- this is because `multiply2` has the `await` keywords in the returned expression, not in the function body; the promises are resolved concurrently, thus taking less time to execute (2 seconds).
- this concurrency means that the promises from `multiply2` are sent to the Web API pile at the same time, where they are resolved concurrently, and then sent to the callback queue at the same time, where they are executed in the order they were resolved.
- `multiply1` has the `await` keywords in the function body, so the promises are resolved sequentially; each promise is resolved after the previous one is resolved, thus taking more time to execute (4 seconds).
- this means that the promises from `multiply1` are sent to the Web API pile one at a time, where they are resolved one at a time (awaiting promise-response), and then sent to the callback queue one at a time, where they are executed in the order they were resolved.
