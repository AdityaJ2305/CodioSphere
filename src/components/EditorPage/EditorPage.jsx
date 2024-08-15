import React, { useEffect } from "react";
import styles from "../EditorPage/EditorPage.module.css"; 
import Client from "../../subComponents/Client";
// import imgCodio from "../../Images/CodioSpher-logo.png";
// import { initSocket } from "../../socket";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import EditorMonaco from "../../subComponents/EditorMonaco";

function EditorPage() {
  // const socketRef = useRef(null);
  const location = useLocation();
  const roomId = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const username = location.state;
    if (!username) {
      // TODO: page to show user to enter username first
      navigate('/');
      return;
    }
  },[location,navigate]);

  async function handleCopyClick() {
    await navigator.clipboard.writeText(roomId.id);
    toast.success("Room ID Copied");
  }

  function handleLeaveClick() {
    navigate('/');
  }

  const clients=[
    { sockecId: 1, username: "Rakesh Kumar" },
    { sockecId: 2, username: "Mukesh kumar" },
    { sockecId: 3, username: "Dinesh Kumar" },
    { sockecId: 1, username: "Rakesh Kumar" },
    { sockecId: 2, username: "Mukesh kumar" },
    { sockecId: 3, username: "Dinesh Kumar" },
    { sockecId: 1, username: "Rakesh Kumar" },
    { sockecId: 2, username: "Mukesh kumar" },
    { sockecId: 3, username: "Dinesh Kumar" },
    { sockecId: 1, username: "Rakesh Kumar" },
    { sockecId: 2, username: "Mukesh kumar" },
    { sockecId: 3, username: "Dinesh Kumar" }
  ];

  return (
    <>
      <div className={styles.aside}>
        <div className={styles.asideInner}>
          {/* <div className={styles.logo}>
            <img
              src={imgCodio}
              alt="logoImage"
              className={styles.logoImage}
            ></img>
          </div> */}
          <h4 className={styles.roomMember}>Room Members</h4>
          <div className={styles.clientList}>
            {clients.map((client) => (
              <Client username={client.username} key={client.sockecId} />
            ))}
          </div>
        </div>
        <div className={styles.asideBtns}>
          <button className={styles.copyBtn} onClick={handleCopyClick}> Copy Room ID </button>
          <button className={styles.leaveBtn} onClick={handleLeaveClick}> Leave Room</button>
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