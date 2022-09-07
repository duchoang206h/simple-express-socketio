const express = require('express');
const { Server } = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const app = express();
const server = new Server(app);
const io = socketIO(server, {
    cors: {
      origin: '*',
    }
  });
const { socketService } = require("./services/socket.service");
const messageRoute = require('./routes/message.route');
// setup io as global variable
global._io = io;
//app.use('/realtime', );
app.use(cors("*"));
app.use('/', messageRoute);
global._io.on("connection", socketService.connection)
module.exports = server;


