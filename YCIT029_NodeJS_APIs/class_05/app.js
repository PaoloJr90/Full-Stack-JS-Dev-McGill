import express from "express";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  console.error("OPENAI_API_KEY is not set.");
  process.exit(1);
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3002;

app.post("/generate", async (req, res) => {
  const { queryDescription } = req.body;

  try {
    const message = [
      { role: "system", content: "You are a dad telling dad jokes." },
      { role: "user", content: queryDescription },
    ];

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: message,
    });

    const dadJoke = response.data.choices[0].message.content;
    res.json({ dadJoke });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
