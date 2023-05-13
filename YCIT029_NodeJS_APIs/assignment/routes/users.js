import express from "express";
import {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../services/usersService.js";
// import the authorize middleware function
import authorize from "../middleware/auth.js";
// import the enforceJSON middleware function to enforce JSON format on PUT and POST requests
import enforceJsonFormat from "../middleware/enforceJSONformat.js";
// import the usersDb from the db.js file
import { usersDb } from "../db.js";

const router = express.Router();
export default router;

// create a new user
router.post("/", authorize("write"), enforceJsonFormat, async (req, res) => {
  const { name, role, email, password, permissions } = req.body;
  if (!name || !role || !email || !password || !permissions) {
    res.status(400).json({
      message:
        "Bad Request: Please provide name, role, email, password, and permissions in JSON format",
    });
    return;
  }
  const user = { ...req.body };
  const newUser = await createUser(user);
  res.status(201).json({ message: "OK: New user created", newUser });
});

// read/get all users
router.get("/", authorize("read"), async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json({ message: "OK: Here are all the users", users });
});

// update a user by id
router.put("/:id", authorize("write"), enforceJsonFormat, async (req, res) => {
  const id = Number(req.params.id);
  const { name, role, email, password, permissions } = req.body;
  if (!name || !role || !email || !password || !permissions) {
    res.status(400).json({
      message: "Bad Request: Please provide user details in JSON format",
    });
    return;
  }
  const updatedUser = await updateUser(id, userUpdates);

  if (!updatedUser) {
    res.status(404).json({ message: "Not found: User ID does not exist" });
  } else updatedUser;
  res.status(200).json({
    message: "OK: the user has been updated with the following:",
    updatedUser,
  });
});

// delete a user by id
router.delete("/:id", authorize("delete"), async (req, res) => {
  const id = Number(req.params.id);
  const user = usersDb.data.users.find((u) => u.id === id);
  const deleted = await deleteUser(id);

  if (!deleted) {
    res
      .status(404)
      .json({ message: `Not found: User ID ${id} does not exist` });
  } else {
    res
      .status(200)
      .json({ message: "OK: The following user has been deleted", user });
  }
});
