import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3009",
        credentials: true 
    }
});
const getAllClient = (roomid)=>{
    return Array.from(io.sockets.adapter.rooms.get(roomid) || []).map((socketId)=>{
        return {
            socketId,
            username: userMap[socketId]
        }
    })
}
const userMap = {};
// Socket.io connection handler
io.on('connection', (socket) => {
    console.log(`a user with socket id ${socket.id}`);

    // Handle events, e.g. joining a room
    socket.on('join', ({roomId}) => {
        userMap[socket.id] = "tinka";
        socket.join(roomId);
        const clients = getAllClient(roomId);
        console.log(clients);
        clients.forEach((data)=>{
            io.to(data.socketId).emit('joined',{
                clients: clients,
                socketId: data.socketId
            })
        })
    });

    socket.on('disconnected', () => {
        console.log('user disconnected');
    });
});

const PORT = process.env.PORT || 5006;
server.listen(PORT, () => {
    console.log(`Server listening on *:${PORT}`);
});