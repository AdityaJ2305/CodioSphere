const express =require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

io.on('connnection',(socket)=>{
    console.log('socket connected ',socket.id);
})


const PORT = process.env.PORT || 5005;

server.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);

})
