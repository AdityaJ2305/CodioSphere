import {io} from 'socket.io-client';

export const initSocket = async ()=>{
    const options = {
        'force new connection': true,
        reconnectionAttempt:'Infinity',
        timeout: 1000,
        transport:['websocket']
    }
    return io("http://localhost:5006", options);
    // it will return socket client instance
    // it is the url on which our server is running
}

