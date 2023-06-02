const fetchData = (shouldSucceed) => {
    if (shouldSucceed) {
      return Promise.resolve("Data fetched successfully");
    } else {
      return Promise.reject(new Error("Failed to fetch data"));
    }
  };
  
  fetchData(true)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  
  fetchData(false)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });