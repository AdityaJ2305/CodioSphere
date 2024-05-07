import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Signinpage/Signin.css";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import imgLogo from "../../Images/CodioSpher-logo.png";
import Github01Icon from "../../assets/Github01Icon";
// import Button from "@mui/material/Button";

function Signin() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Room ID & Username is Required");
      return;
    }
    localStorage.setItem("RoomID", roomId);
    localStorage.setItem("username", username);
    navigate(`/editor/${roomId}`, {
      state: {
        username,
        roomId,
      },
    });
  };
  const handleInputEnter = (e) => {
    e.preventDefault();
    if (e.code === "Enter") {
      joinRoom();
    }
  };
  const createNewRoom = (event) => {
    event.preventDefault();
    const id = uuidV4();
    // console.log(id);
    setRoomId(id);
    toast.success("Created New Room");
  };
  return (
    <div className="fullscreenWrapper">
      <div className="signinWrapper">
        
        <div className="logoSign">
          <img src={imgLogo} alt="CodioSphere Logo" />
        </div>

        <form spellCheck="off">
          <div className="roomId labePlusInput">
            <label>Room Id</label>
            <input
              type="text"
              autoComplete="off"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              onKeyUp={handleInputEnter}
            ></input>
          </div>
          <div className="username labePlusInput">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyUp={handleInputEnter}
            ></input>
          </div>
        </form>
        <button className="btn joinBtn" onClick={joinRoom}>
          Join
        </button>
        <p className="createNewRoom">Create a 
          <span onClick={createNewRoom}>New Room</span>
        </p>
      </div>
      <footer>
        <h4>
          {" "}
          Built by Aditya Jindal{" "}
          <a
            href="https://github.com/AdityaJ2305/CodioSphere.git"
            target="_blank"
          >
            <Github01Icon/>
          </a>
        </h4>
      </footer>
    </div>
  );
}

export default Signin;
