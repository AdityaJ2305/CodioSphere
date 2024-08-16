import React, { useState, useEffect } from "react";
import styles from "../EditorPage/EditorPage.module.css"; 
import Client from "../../util/Client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import EditorMonaco from "../../util/EditorMonaco";
import { faStream } from "@fortawesome/free-solid-svg-icons";
function EditorPage() {
  const [isAsideVisible, setIsAsideVisible] = useState(false); // State to toggle the aside
  const location = useLocation();
  const roomId = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const username = location.state;
    if (!username) {
      navigate('/');
      return;
    }
  }, [location, navigate]);

  async function handleCopyClick() {
    await navigator.clipboard.writeText(roomId.id);
    toast.success("Room ID Copied");
  }

  function handleLeaveClick() {
    navigate('/');
  }

  function toggleAside() {
    setIsAsideVisible(!isAsideVisible);
  }

  const clients = [
    { socketId: 1, username: "Rakesh Kumar" },
    { socketId: 2, username: "Mukesh Kumar" },
    { socketId: 3, username: "Dinesh Kumar" },
    { socketId: 5, username: "Rakesh Kumar" },
    { socketId: 6, username: "Mukesh Kumar" },
    { socketId: 7, username: "Dinesh Kumar" },
    { socketId: 8, username: "Rakesh Kumar" },
    { socketId: 9, username: "Mukesh Kumar" },
    { socketId: 0, username: "Dinesh Kumar" },
  ];

  return (
    <>
      <FontAwesomeIcon 
        icon={faStream} 
        style={{color:"white"}}
        className={`${styles.dropDown}`} 
        onClick={toggleAside}
      />
      <div className={`${styles.aside} ${isAsideVisible ? styles.asideVisible : styles.asideHidden}`}>
        <div className={styles.asideInner}>
          <h1 className={styles.roomMember}>Room Members</h1>
          <div className={styles.clientList}>
            {clients.map((client) => (
              <Client username={client.username} key={client.socketId} />
            ))}
          </div>
        </div>
        <div className={styles.asideBtns}>
          <button className={styles.copyBtn} onClick={handleCopyClick}>Copy Room ID</button>
          <button className={styles.leaveBtn} onClick={handleLeaveClick}>Leave Room</button>
        </div>
      </div>
      <div className={styles.mainWrapper}>
        <div className={styles.editorWrapper}>
          <EditorMonaco />
        </div>
      </div>
    </>
  );
}

export default EditorPage;