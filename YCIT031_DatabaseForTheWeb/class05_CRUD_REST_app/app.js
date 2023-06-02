import express from "express";
import db from "./db.js";
import animalsRouter from "./routes/animals.js";
// import enclosuresRouter from "./routes/enclosures.js";
// import staffRouter from "./routes/staff.js";

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Custom middleware to attach the db to res.locals
// app.use((req, res, next) => {
//   res.locals.db = db;
//   next();
// });

// Using the routers
app.use("/animals", animalsRouter);
// app.use("/enclosures", enclosuresRouter);
// app.use("/staff", staffRouter);

// test route to check if the server is running
app.get("/test", (req, res) => {
  res.send("Zoo Management API is running!");
});

const port = process.env.PORT || 3000;

// previously would use this to start the server
// app.listen(port, () => {
//   console.log(`Zoo Management API listening on port ${port}`);
// });

// Now we use the db.connect() method to establish a connection with the database
// then we start the server, listening on the specified port
// using the .then() and .catch() methods to handle the promise returned by db.connect()
// if the promise is resolved, the .then() method is called, otherwise the .catch() method is called
db.connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Zoo Management API listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to establish connection with the database:", err);
    process.exit(1); // Exit the process with 'failure' status code
  });
