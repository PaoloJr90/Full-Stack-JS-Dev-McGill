import express from "express";
import imagesRouter from "./routes/images.js";
import usersRouter from "./routes/users.js";

const app = express();
// this is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

app.use("/api/images", imagesRouter); // this is the base path for all images routes
app.use("/api/users", usersRouter); // this is the base path for all users routes

const PORT = 3060;
app.listen(PORT, () => {
  console.log("Server is operational on port: " + PORT);
});
