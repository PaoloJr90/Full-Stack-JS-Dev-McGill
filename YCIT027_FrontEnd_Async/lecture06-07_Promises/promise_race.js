const fetchResource = (resource, delay) => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API call with a specified delay
      setTimeout(() => {
        resolve(`${resource} is fetched successfully in ${delay}ms`);
      }, delay);
    });
  };
  
  const resource1 = fetchResource("Resource 1", 2000);
  const resource2 = fetchResource("Resource 2", 1500);
  const resource3 = fetchResource("Resource 3", 1000);
  
  Promise.race([resource1, resource2, resource3])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
