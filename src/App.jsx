import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import EditPost from "./components/EditPost";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createPost" element={<CreatePost />}></Route>
        <Route path="/editpost/:id" element={<EditPost />} />
      </Routes>
    </>
  );
}

export default App;