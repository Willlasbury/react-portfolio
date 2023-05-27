// import './App.css';
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import NotFound from "../pages/NotFound";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [firstVisit, setFirstVisit] = useState(true);

  return (
    <div className="flex flex-col h-screen w-full absolute px-5 py-1">
      <BrowserRouter>
        
          <NavBar />    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
