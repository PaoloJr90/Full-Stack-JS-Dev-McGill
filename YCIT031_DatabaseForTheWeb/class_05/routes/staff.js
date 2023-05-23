import express from "express";

const router = express.Router();

// Simulating the delay for the notification
const sendNotification = async (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve(message);
    }, 2000);
  });
};

// Get all staff
router.get("/", async (req, res) => {
  const { rows } = await res.locals.db.query("SELECT * FROM staff;");
  res.json(rows);
});

// Get a single staff member by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { rows } = await res.locals.db.query(
    "SELECT * FROM staff WHERE id = $1;",
    [id]
  );

  if (rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.json(rows[0]);
  }
});

// Create a new staff member
router.post("/", async (req, res) => {
  const { name, position, hire_date } = req.body;
  const { rows } = await res.locals.db.query(
    "INSERT INTO staff (name, position, hire_date) VALUES ($1, $2, $3) RETURNING *;",
    [name, position, hire_date]
  );
  res.status(201).json(rows[0]);
});

// Update a staff member
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, position, hire_date } = req.body;
  const { rows } = await res.locals.db.query(
    "UPDATE staff SET name = $1, position = $2, hire_date = $3 WHERE id = $4 RETURNING *;",
    [name, position, hire_date, id]
  );

  if (rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.json(rows[0]);
  }
});

// Delete a staff member
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { rowCount } = await res.locals.db.query(
    "DELETE FROM staff WHERE id = $1;",
    [id]
  );

  if (rowCount === 0) {
    res.sendStatus(404);
  } else {
    res.sendStatus(204);
  }
});

// Send notification to a staff member
router.post("/:id/notify", async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  const { rows } = await res.locals.db.query(
    "SELECT * FROM staff WHERE id = $1;",
    [id]
  );

  if (rows.length === 0) {
    res.sendStatus(404);
  } else {
    const staffMember = rows[0];
    const notificationMessage = `Message to ${staffMember.name}: ${message}`;
    await sendNotification(notificationMessage);
    res.status(200).send(`Notification sent to ${staffMember.name}`);
  }
});

export default router;
