//Sample #1:

const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/api/users", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching data from the API." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Sample 2:

const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const port = 3000;

app.get("/data", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "data", "example.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(fileContent);
    res.json(jsonData);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while reading the file." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
