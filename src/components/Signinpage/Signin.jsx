import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import "../Signinpage/Signin.css";
import TextField from "@mui/material/TextField";
import {v4 as uuidV4} from "uuid"
import toast from "react-hot-toast";
import imgLogo from "../../Images/CodioSpher-logo.png";
// import Button from "@mui/material/Button";


function Signin() {
  const [roomId , setRoomId] = useState("");
  const [username, setUsername]= useState("");
  const navigate = useNavigate();

  const joinRoom=()=>{
    if(!roomId || !username){
      toast.error('Room ID & Username is Required');
      return ;
    }
    localStorage.setItem('RoomID',roomId);
    localStorage.setItem('username',username);
    navigate(`/editor/${roomId}`,{
      state:{
        username,roomId
      }
    })
  }
  const handleInputEnter=(e)=>{
    e.preventDefault()
    if(e.code ==='Enter'){
      joinRoom();
    }
  }
  const createNewRoom=(event)=>{
    event.preventDefault();
    const id= uuidV4();
    // console.log(id);
    setRoomId(id);
    toast.success('Created New Room')
  }
  return (
    <div className="fullscreenWrapper">
    <div className="signinWrapper">
      <div className="logoSign">
      <img src={imgLogo}  width="200px"alt="hello world " /> 
      </div>
      <TextField
        id="outlined-basic"
        label="Room ID"
        variant="filled"
        autoComplete="off"
        helperText="**Paste Room ID**"
        sx={{ width: "25vw",input:{color:'white'} }}
        color="secondary"
        value={roomId}
        onChange={(e)=>setRoomId(e.target.value)}
        onKeyUp={handleInputEnter}
      />
      <br />
      <br/>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="filled"
        type="text"
        autoComplete="off"
        sx={{ width: "25vw",input:{color:'white'}  }}
        color="secondary"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        onKeyUp={handleInputEnter}
      />
      <br />
      <br/>
      {/* <Button variant="contained" sx={{ width: "6rem" }} size="large">Proceed</Button> */}
      <button className="btn joinBtn" onClick={joinRoom}>Join</button>
      <p className="createNewRoom">If you don't have an invite then create <span onClick={createNewRoom}>New Room</span></p>
    </div>
    <footer>
      <h4> Built by Aditya Jindal <a href="https://github.com/AdityaJ2305/CodioSphere.git" target="_blank">Github</a></h4>
    </footer>
    </div>
  );
}

export default Signin;
