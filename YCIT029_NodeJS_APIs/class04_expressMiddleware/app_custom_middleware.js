// import express framework, from package.json file and node_modules folder
import express from "express";

// create an express application
const app = express();

// create a route for the application
// use next(), an express method, to call the next middleware function
function middleware1(req, res, next) {
  console.log("middleware1, request was received");
  next();
}
function middleware2(req, res, next) {
  console.log("middleware2");
  next();
}
function middleware3(req, res, next) {
  console.log("middleware3");
  next();
}

// create a route for the application; a get request
// app.get will take three parameters
// the second parameter is an array of middleware functions previously defined
app.get("/", [middleware1, middleware2, middleware3], (req, res) => {
  res.send("Hello 222");
  console.log("response sent");
});

// create a route for the application; a get request
app.get("/:param1", (req, res) => {
  console.log(req.params.param1);
  res.status(202).json({ theParam: req.params.param1 });
});

// create a route for the application; a post request
// express.json() is a middleware function that parses incoming requests with JSON payloads
// the parsed object is available in the request.body property
// express.json() returns a function that is passed to the app.post() method
app.post("/:param1", [express.json()], (req, res) => {
  console.log(req.params.param1);
  const body = req.body; // can access the body of the request because of express.json()
  res.status(202).json({ theParam: req.params.param1, theBody: body });
});

// create a route for the application
// app.get is an express method that takes two parameters
// 1. the route
// 2. a callback function that takes two parameters
// 2.1. request object
// 2.2. response object
app.get("/other-route", (req, res) => {
  res.send("Hello World");
});

// start the server on port 4000
// app.listen is an express method
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Customer server is running on port ${PORT}`);
});
