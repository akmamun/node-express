const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
const index = require("./route/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server); // < socket!
const getApiAndEmit = "TODO"
server.listen(port, () => console.log(`Listening on port ${port}`));
