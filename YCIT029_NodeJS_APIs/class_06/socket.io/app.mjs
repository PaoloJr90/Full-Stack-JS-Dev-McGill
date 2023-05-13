import express from "express";
import http from "http";
import { Server as socketIO } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new socketIO(server);

// app.use below is a middleware that serves static files from the public folder
app.use(express.static("public"));
// app.use below is a middleware that serves static files from the node_modules folder
app.use("/socket.io", express.static("node_modules/socket.io/client-dist"));

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("chat message", (msg) => {
    console.log("Message received:", msg, "from:", socket.id);
    io.emit("chat message", `${socket.id}: ${msg}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
