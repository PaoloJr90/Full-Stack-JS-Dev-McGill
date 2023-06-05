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
- multiply function is called with 10 as argument.
- 

