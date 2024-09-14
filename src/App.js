import { Toaster } from "react-hot-toast";
import "./App.css";
import SignIn from "./components/Signinpage/Signin";
import { SpeedInsights } from "@vercel/speed-insights/react"
import EditorPage from "./components/EditorPage/EditorPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "green",
              },
            },
          }}
        ></Toaster>
      </div>
      <Routes>
        <Route path="/" element={<SignIn/>}/>;
        <Route path="/editor/:id" element={<EditorPage/>}/>
      </Routes>
      <SpeedInsights />
    </>
  );
}

export default App;
