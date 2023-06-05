const calculateSum = (arrays) => {
    const promises = arrays.map((array) => {
      return new Promise((resolve, reject) => {
        if (!Array.isArray(array) || array.length === 0) {
          reject("Input parameter must be an array object and length must be >= 1");
        } else {
          let sum = 0;
          array.forEach((element) => {
            sum += element;
          });
          resolve(sum);
        }
      });
    });
    return Promise.all(promises);
  };
  
  const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  
  calculateSum(arrays)
    .then((results) => {
      console.log(`Sum of each inner-array = ${results}`);
      return results;
    })
    .then((accumulatedResults) => {
        let sum = 0;
        
        accumulatedResults.forEach((element) => {
            sum += element;
        });
        console.log(`Sum of inner-arrays = ${sum}`);
        return sum;
    })
    .catch((error) => {
      console.log(error);
    });