import express from 'express';
const app = express();

app.get('/',(req,res)=>{
    return res.send("<div>Hello how are you </div>");
})

app.listen(4004,()=>{
    console.log('server listening');
})
