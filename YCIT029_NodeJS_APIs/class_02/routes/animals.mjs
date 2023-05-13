// routes/animals.mjs
import express from "express";
import db from "../db.mjs";

const router = express.Router();

router.get("/", (req, res) => {
  // Get all animals
  //console.log("Object.keys(db)", Object.keys(db));
  // respond with the animals array from the database
  res.json(db.data.animals);
});

router.get("/:animalId", (req, res) => {
  // Get a specific animal by ID
  const animalId = Number(req.params.animalId);
  //console.log("animailId", animalId, db.data.animals);
  const animal = db.data.animals.find((a) => a.id === animalId);

  if (!animal) {
    // animal is coerced to boolean
    res.status(404).end();
  } else {
    // we found it
    res.json(animal);
  }
  res.json(animal);
});

router.post("/", async (req, res) => {
  // Add a new animal
  // destructure the request body
  const { name, species, habitatId } = req.body;

  // validate the request body. if any of these are missing, send 400 with json message
  if (!name || !species || !habitatId) {
    res.status(400).json({
      message: "Name, species, and habitatId are required",
    });
    return;
  }

  // create a new animal object with the required fields. This will be added to the database afterwards
  const newAnimal = {
    id: db.data.animals.length + 1,
    name,
    species,
    habitatId,
  };

  // add the new animal to the database
  db.data.animals.push(newAnimal);
  // write to the database
  await db.write();
  // send a 201 response with the new animal object
  res.status(201).json(newAnimal);
});

router.put("/:animalId", (req, res) => {
  // Update an existing animal by ID
  // find the animal by id within the animals array in the database, convert the id to a number
  const animalId = Number(req.params.animalId);

  // find the animal by id within the animals array in the database
  const animal = db.data.animals.find((a) => a.id === animalId);

  if (!animal) {
    // animal is coerced to boolean. if not found, send 404 with json message
    res.status(404).json({ message: "animal not found" });
    return;
  }

  // destructure the request body
  const { name, species, habitatId } = req.body;

  // validate the request body. if any of these are missing, send 400 with json message
  if (!name || !species || !habitatId) {
    res.status(400).json({
      message: "Name, species, and habitatId are required",
    });
    return;
  }

  // update the animal with the new data
  animal.name = name;
  animal.species = species;
  animal.habitatId = habitatId;

  // write the updated data to the file
  db.write();
  // send the updated animal back to the client in json format
  res.json({ message: "the following animal has been updated", animal });
});

router.delete("/:animalId", (req, res) => {
  // Delete an animal by ID
  // find the animal by id within the animals array in the database, convert the id to a number
  const animalId = Number(req.params.animalId);

  // find the animal by id within the animals array in the database
  const animal = db.data.animals.find((a) => a.id === animalId);

  // if the animal is not found, send 404 with json message
  if (!animal) {
    // animal is coerced to boolean
    res.status(404).json({ message: "animalId not found" });
    return;
  }

  // we found it, so delete the animal
  db.data.animals.splice(animal - 1, 1);
  // write the updated data to the file
  db.write();
  // send the deleted animal back to the client in json format
  res.json({ message: "the following animal has been deleted", animal });
});

export const animalsRouter = router;
