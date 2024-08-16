import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Signinpage/Signin.module.css";
import { customAlphabet } from "nanoid";
import toast from "react-hot-toast";
import imgLogo from "../../assets/Images/CodioSpher-logo.png";
import Github01Icon from "../../assets/Github01Icon";

function Signin() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    const handleFocus = (event) => {
      if (event.key === "/") {
        inputRef.current.focus();
      }
    };
    document.addEventListener("keyup", handleFocus);
  }, []);

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Room ID & Username is Required");
      return;
    }
    navigate(`/editor/${roomId}`, { state: username });
  };

  const handleInputEnter = (e) => {
    e.preventDefault();
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  const createNewRoom = (event) => {
    event.preventDefault();
    const alphabet =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const nanoid = customAlphabet(alphabet, 8);
    const id = nanoid();
    setRoomId(id);
    toast.success("Created New Room");
  };

  return (
    <div className={styles.fullscreenWrapper}>
      <div className={styles.signinWrapper}>
        <div className={styles.logoSign}>
          <img src={imgLogo} alt="CodioSphere Logo" />
        </div>
        <form spellCheck="off">
          <div className={styles.roomId + " " + styles.labePlusInput}>
            <label>Room Id</label>
            <input
              type="text"
              autoComplete="off"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              onKeyUp={handleInputEnter}
              ref={inputRef}
              spellCheck="false"
            ></input>
          </div>
          <div className={styles.username + " " + styles.labePlusInput}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyUp={handleInputEnter}
            ></input>
          </div>
        </form>
        <button
          className={styles.btn + " " + styles.joinBtn}
          onClick={joinRoom}
        >
          Join
        </button>
        <p className={styles.createNewRoom}>
          Create a<span onClick={createNewRoom}>New Room</span>
        </p>
      </div>
      <footer>
        <h4>
          {" "}
          Built by Aditya Jindal{" "}
          <a
            href="https://github.com/AdityaJ2305/CodioSphere.git"
            target="_blank"
            rel="noreferrer"
          >
            <Github01Icon />
          </a>
        </h4>
      </footer>
    </div>
  );
}

export default Signin;
