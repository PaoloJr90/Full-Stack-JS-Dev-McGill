import express from "express";
//import { EventEmitter } from "events";
import fetch from "node-fetch";
import { RadioActiveSubstance } from "./radioactiveSubstance.mjs";

//const eventEmitter = new EventEmitter();
const app = express();

// app.use(express.json()) is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
app.use(express.json());

const webhooks = [];

webhooks.forEach((webhookUrl) => {
  fetch(webhookUrl, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
});

app.post("/webhook", (req, res) => {
  const body = req.body;
  webhooks.push(body.url);

  res.status(201).send("Webhook added");
});

app.post("/call-me-here", (req, res) => {
  console.log("got it!", req.body);
  res.end();
});

// using async with Promises example
const startRadioactivityPromise = new Promise((resolve) => {
  setTimeout(() => {
    const substance = new RadioActiveSubstance("my sample", 3, webhooks);
    substance.startRadioactivity();
    resolve();
  }, 2000);
});

startRadioactivityPromise.then(() => {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});

// const substance = new RadioActiveSubstance("my sample", 3, webhooks);
// substance.startRadioactivity();

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
