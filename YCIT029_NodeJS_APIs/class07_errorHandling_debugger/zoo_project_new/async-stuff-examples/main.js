async function generateError() {
  // async function means that it returns a Promise. The function will take a while to complete, but we don't know how long it will take.
  // ~ 50ms
  throw new Error("something went terribly wrong, sorry");
}

try {
  generateError();
} catch (error) {
  // "catch" logic goes here
  console.log(error);
}

// another method of handling errors. this has the same effect as the try/catch block above
generateError()
  .then((result) => {
    // do something with the result
  })
  .catch((error) => {
    console.error(error);
  });
