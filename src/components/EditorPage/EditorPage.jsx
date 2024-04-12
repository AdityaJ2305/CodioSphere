import React, { useState,useRef, useEffect} from "react";
import "../EditorPage/EditorPage.css";
import Client from "../../subComponents/Client";
import Editor from "../../subComponents/Editor";
import imgCodio from "../../Images/CodioSpher-logo.png"
import { initSocket } from "../../socket";
import { useParams,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function EditorPage() {
  const socketRef = useRef(null);
  const roomId = useParams();
  const navigate = useNavigate();
  console.log(roomId.id)
  // useEffect(()=>{
  //   const init = async ()=>{
  //     socketRef.current = await initSocket();
  //     socketRef.current.emit(ACTIONS.JOIN,{
  //       roomId,
  //       username
  //     })
  //   }
  //   init()
  // },[])
  async function handleCopyClick(){
   await navigator.clipboard.writeText(roomId.id);
    toast.success("Room ID Copied");
  }

  function handleLeaveClick(){
    navigate('/')
  }

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
        <button className="copyBtn" onClick={handleCopyClick}> Copy Room ID </button>
        <button className="leaveBtn" onClick={handleLeaveClick}> Leave Room</button>
        </div>
      </div>
      {/* <div className="editorWrap"> */}
        <Editor />
      {/* </div> */}
    </div>
  );
}

export default EditorPage;
