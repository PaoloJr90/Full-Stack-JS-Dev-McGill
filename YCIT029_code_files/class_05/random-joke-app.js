import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data from the incoming request
app.use(express.json());

app.get("/random-joke", async (req, res) => {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const joke = response.data;
    res.status(200).json({
      setup: joke.setup,
      punchline: joke.punchline,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch random joke." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
