import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UploadFile from "./components/UploadFile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/uploadfile" element={<UploadFile />} />
      </Routes>
    </>
  );
}

export default App;
