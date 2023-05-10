import express from "express";
import imagesRouter from "./routes/animals.mjs";
import usersRouter from "./routes/users.mjs";
import notificationsRouter from "./routes/notifications.mjs";

const app = express();

app.use(express.json());

app.use("/api/images", animalsRouter);
app.use("/api/users", usersRouter);
app.use("/api/notifications", notificationsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
