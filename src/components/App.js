import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import NotFound from "../pages/NotFound";
import Footer from "./Footer";

function App() {

  return (
    <div className="flex flex-col h-screen w-full absolute px-5 py-1">
      <BrowserRouter>
        
          <NavBar />    
          <Routes>
            <Route path="react-portfolio/" element={<Home />} />
            <Route path="react-portfolio/portfolio" element={<Projects />} />
            <Route path="react-portfolio/aboutme" element={<AboutMe />} />
            <Route path="react-portfolio/contact" element={<Contact />} />
            <Route path="react-portfolio/resume" element={<Resume />} />
            <Route path="react-portfolio/*" element={<NotFound />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
