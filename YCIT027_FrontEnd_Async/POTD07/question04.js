const stringLengths = (arrays) => {
    const promises = arrays.map((array) => {
      return new Promise((resolve, reject) => {
        if (array.every((element) => typeof element === "string" && element.length > 0)) {
          resolve(array.map((element) => {
            //console.log(element.length);
            return element.length;
          }));
        } else {
          reject("Input parameter must be an array of strings and length must be >= 1");
        }
      });
    });
    return Promise.all(promises);
  };
  
  const arrays = [["Hello", "World"], ["Goodbye", "Galaxy", "Universe"]];
  
  stringLengths(arrays)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.log(error);
    });