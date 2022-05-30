import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "../src/components/Home";
import Login from "../src/components/Login";
import Register from "../src/components/Register";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
