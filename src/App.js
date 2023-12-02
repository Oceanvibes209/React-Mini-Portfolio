import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About";
import Certifications from "./Pages/Certifications";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage"
import "./App.css"
function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Certifications"element={<Certifications/>}/>
      <Route path="/Portfolio" element={<Portfolio/>}/>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
