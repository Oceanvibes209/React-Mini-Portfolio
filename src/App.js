import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About";
import Certifications from "./Pages/Certifications";
function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Certifications"element={<Certifications/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
