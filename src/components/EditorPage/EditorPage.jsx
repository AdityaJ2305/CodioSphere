import React, { useState } from "react";
import "../EditorPage/EditorPage.css";
import Client from "../../subComponents/Client";
import Editor from "../../subComponents/Editor";
import imgCodio from "../../Images/CodioSpher-logo.png"

function EditorPage() {
  const [clients, setClients] = useState([
    { sockecId: 1, username: "Rakesh Kumar" },
    { sockecId: 2, username: "Mukesh kumar" },
    { sockecId: 3, username: "Dinesh Gumar" }
  ]);
  return (
    <div className="mainWrapper">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img
              src={imgCodio}
              alt="logoImage"
              className="logoImage"
            ></img>
          </div>
          <h4 className="roomMember">Room Members</h4>
        <div className="clientList">
          {clients.map((client) => (
            <Client username={client.username} key={client.sockecId} />
          ))}
        </div>
        </div>
        <div className="asideBtns">
        <button className="btn copyBtn"> Copy Room ID </button>
        <button className="btn leaveBtn"> Leave Room</button>
        </div>
      </div>
      {/* <div className="editorWrap"> */}
        <Editor />
      {/* </div> */}
    </div>
  );
}

export default EditorPage;
