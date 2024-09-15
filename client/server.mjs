import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('socket connected ', socket.id);
});

const PORT = process.env.PORT || 5009;

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});