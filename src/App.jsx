import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import EditPost from "./components/EditPost";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/createPost" element={<CreatePost />}></Route>
        <Route path="/editpost/:id" element={<EditPost />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;