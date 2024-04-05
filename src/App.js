import { Toaster } from "react-hot-toast";
import "./App.css";
import Signin from "./components/Signinpage/Signin";
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
        <Route path="/" element={<Signin />}/>;
        <Route path="/editor/:id" element={<EditorPage/>}/>
      </Routes>
    </>
  );
}

export default App;
