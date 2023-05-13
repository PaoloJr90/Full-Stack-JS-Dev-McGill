// routes/habitats.mjs
import express from "express";
import db from "../db.mjs";

const router = express.Router();

router.get("/", (req, res) => {
  // Get all habitats
  // respond with the habitats array from the database
  res.json(db.data.habitats);
});

router.get("/:habitatId", (req, res) => {
  // Get a specific habitat by ID
  // get the habitatId from the request and convert it to a number
  const habitatId = Number(req.params.habitatId);

  // find the habitat with the matching Id from the request in the database
  const habitat = db.data.habitats.find((h) => h.id === habitatId);

  // if the habitat is not found, return a 404 error
  if (!habitat) {
    res.status(404).json({ message: "Habitat not found" });
    return;
  }

  // if the habitat is found, return it
  res.json(habitat);
});

router.post("/", (req, res) => {
  // Add a new habitat
  // destructure the request body
  const { name, description } = req.body;

  // validate the request body. if any of these are missing, send 400 with json message
  if (!name || !description) {
    res.status(400).json({
      message: "Name and description are required",
    });
    return;
  }

  // create a new habitat object with the required fields. This will be added to the database afterwards
  const newHabitat = {
    id: db.data.habitats.length + 1,
    name,
    description,
  };

  // add the new habitat to the database
  db.data.habitats.push(newHabitat);
  // write to the database
  db.write();
  // send a 201 response with the new habitat object
  res.status(201).json(newHabitat);
});

router.put("/:habitatId", (req, res) => {
  // Update an existing habitat by ID
  // get the habitatId from the request and convert it to a number
  const habitatId = Number(req.params.habitatId);

  // find the habitat with the matching Id from the request in the database
  const habitat = db.data.habitats.find((h) => h.id === habitatId);

  // if the habitat is not found, return a 404 error
  if (!habitat) {
    res.status(404).json({ message: "Habitat not found" });
    return;
  }

  // destructure the request body
  const { name, description } = req.body;

  // validate the request body. if any of these are missing, send 400 with json message
  if (!name || !description) {
    res.status(400).json({
      message: "Name and description are required",
    });
    return;
  }

  // update the habitat object with the new values
  habitat.name = name;
  habitat.description = description;

  // write to the database
  db.write();
  // send a 200 response with the updated habitat object
  res.json({ message: "the following habitat was updated", habitat });
});

router.delete("/:habitatId", (req, res) => {
  // Delete a habitat by ID
  // find the habitat with the matching Id from the request in the database
  const habitatId = Number(req.params.habitatId);

  // find the habitat with the matching Id from the request in the database
  const habitat = db.data.habitats.find((h) => h.id === habitatId);

  // if the habitat is not found, return a 404 error
  if (!habitat) {
    res.status(404).json({ message: "Habitat not found" });
    return;
  }

  // remove the habitat from the database
  db.data.habitats.splice(habitatId - 1, 1);
  // write to the database
  db.write();
  // send a 200 response with the deleted habitat object
  res.json({ message: "the following habitat was deleted", habitat });
});

export const habitatsRouter = router;
