import express from 'express';
import { Server as SocketIoServer } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new SocketIoServer(server);

app.get('/',(req,res)=>{
    return res.send("<div>Hello how are you ? </div>");
})
io.on('connection', (socket) => {
    console.log('socket connected ', socket.id);
});

const PORT = process.env.PORT || 5009;

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});