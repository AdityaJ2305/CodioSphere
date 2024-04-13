import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import EditorMonaco from "./subComponents/EditorMonaco";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <Router>
      {/* <EditorMonaco/> */}
      <App/>
    </Router>
  
);


