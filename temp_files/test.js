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