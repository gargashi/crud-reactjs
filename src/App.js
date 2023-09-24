import "./App.css";
import Create from "./Components/create";
import Read from "./Components/read";
import Update from "./Components/update";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="my-4">CRUD OPERATION USING REACTJS</h1>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
