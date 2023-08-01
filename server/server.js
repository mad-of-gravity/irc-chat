// App setup
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
const socketIO = require("socket.io");
const io = socketIO(server, {
  cors: { origin: "http://localhost:3000" },
});
const moment = require("moment");
const path = require("path");

// Middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Chat rooms that contain a room code and users { 123: ['user1'], chat-room123: ['user1','user2', 'user3'] }
const rooms = {};

app.get('/', (req, res) => {
    res.send("Hi there!");
})

app.get("/api/:roomCode", (req, res) => {
    const code = req.params.roomCode;
    const codeExists = roomToUsers[roomCode] ? true : false;
    res.json({ codeExists: codeExists });
  });

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });