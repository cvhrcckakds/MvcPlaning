import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPostContoller from "./pages/ListPostPage/ListPostContoller";
import AddPostController from "./pages/AddPostPage/AddPostController";
import Header from "./components/Header";
import "./assets/style.scss";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<ListPostContoller/>}/>
        <Route path="/add-post" element={<AddPostController/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
