// routes/feedingTimes.mjs
import express from "express";
import { nanoid } from "nanoid";
import db from "../db.mjs";
import { animalsRouter } from "./animals.mjs";

const router = express.Router();

router.get("/", (req, res) => {
  // Get all feeding times
  // respond with the feeding times array from the database
  res.json(db.data.feedingTimes);
});

router.get("/:feedingTimeId", (req, res) => {
  // Get a specific feeding time by ID
  const feedingTimeId = Number(req.params.feedingTimeId);

  // find the feeding time with the matching Id from the request in the database
  const feedingTime = db.data.feedingTimes.find((f) => f.id === feedingTimeId);

  // if the feeding time is not found, return a 404 error
  if (!feedingTime) {
    res.status(404).json({ message: "Feeding time not found" });
    return;
  }
  // if the feeding time is found, return it
  res.json(feedingTime);
});

router.post("/", async (req, res) => {
  // Create a new feeding time
  // destructure the request body
  const { animalId, time } = req.body;

  // check if the required json fields are present
  if (!animalId || !time) {
    res.status(400).json({
      message: "Both animalId and time are required",
    });
    return;
  }

  // create a new feeding time object with the required fields
  const newFeedingTime = {
    id: db.data.feedingTimes.length + 1,
    animalId,
    time,
  };

  // add the new feeding time to the database
  db.data.feedingTimes.push(newFeedingTime);
  // write to the database
  await db.write();
  // send a 201 response with the new feeding time object
  res.status(201).json({
    message: "the following feeding time has been created:",
    // insert individual fields here if you don't want to send the whole object
    Id: newFeedingTime.id,
    AnimalId: newFeedingTime.animalId,
    Time: newFeedingTime.time,
  });
});

router.put("/:feedingTimeId", (req, res) => {
  // Update an existing feeding time by ID
  // get the feeding time ID from the request parameters and convert it to a number
  const feedingTimeId = Number(req.params.feedingTimeId);

  // find the feeding time from the request parameters in the database
  const feedingTime = db.data.feedingTimes.find((f) => f.id === feedingTimeId);

  // if the feeding time is not found, send a 404 response with a json message
  if (!feedingTime) {
    res.status(404).json({ message: "Feeding time not found" });
    return;
  }
  // destructure the request body
  const { animalId, time } = req.body;

  // check if the required json fields are present
  if (!animalId || !time) {
    res.status(400).json({
      message: "Both animalId and time are required",
    });
    return;
  }

  // update the feeding time from the request body
  feedingTime.animalId = animalId;
  feedingTime.time = time;

  // write the updated data to the database
  db.write();
  // send the updated feeding time back to the client
  res.json(feedingTime);
});

router.delete("/:feedingTimeId", (req, res) => {
  // Delete a feeding time by ID
  // get the feeding time ID from the request parameters and convert it to a number
  const feedingTimeId = Number(req.params.feedingTimeId);

  // lookup the feeding time in the database based on the Id from the request
  const feedingTime = db.data.feedingTimes.find((f) => f.id === feedingTimeId);

  // if the feeding time is not found, send a 404 response with a json message
  if (!feedingTime) {
    res.status(404).json({ message: "Feeding time not found" });
    return;
  }

  // remove the feeding time from the database
  db.data.feedingTimes.splice(feedingTimeId - 1, 1);
  // write the updated data to the database
  db.write();
  // send a 200 response with a json message
  res.json({
    message: "The following feeding time has been deleted",
    feedingTime,
  });
});

export const feedingTimesRouter = router;
