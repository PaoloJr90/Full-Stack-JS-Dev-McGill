//Sample #1:

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "public", "about.html");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  res.send(fileContent);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Sample #2:

const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app2 = express();
const port2 = 3001;

app2.set("view engine", "ejs");
app2.set("views", path.join(__dirname, "views"));

app2.get("/", (req, res) => {
  const data = {
    title: "Home",
    message: "Welcome to our homepage!",
  };
  const renderedHtml = ejs.renderFileSync(
    path.join(__dirname, "views", "index.ejs"),
    data
  );
  res.send(renderedHtml);
});

app2.listen(port2, () => {
  console.log(`Server is running on port ${port2}`);
});
