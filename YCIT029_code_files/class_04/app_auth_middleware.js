// import express framework, from package.json file and node_modules folder
import express from "express";

// create an express application
const app = express();

// define and initialize a constant variable (a secret password)
// this will be used to check if the client's password (in request; whether header of body) is correct
const SECRET_PASSWORD = "password1234";

// create a function that will be used as middleware
// this function will check if the password is correct
// the password is sent in the headers of the request (req)
const passwordCheckerMiddleware = (req, res, next) => {
  //console.log("headers", req.headers);
  const password = req.headers["x-password"];
  if (!password || password !== SECRET_PASSWORD) {
    res.status(401).send("You are not authorized to access this endpoint");
  } else {
    next();
  }
};

// create a route for the application.
// a get request to the root of the application
app.get("/public", (req, res) => {
  console.log("public endpoint headers", req.headers);
  res.send("This is a public endpoint. No authentication is required");
});

// create a route for the application.
// a get request to the root of the application
// this route is protected by the passwordCheckerMiddleware function described above
app.get("/protected", [passwordCheckerMiddleware], (req, res) => {
  console.log("protected endpoint headers", req.headers);
  res.send(
    "This is a protected endpoint. You are authenticated and authorized to access this endpoint"
  );
  //res.send(req);
});

// start the server on port 4000
// app.listen is an express method
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Authentication server is running on port ${PORT}`);
});
