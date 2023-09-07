import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <main className="flex flex-col items-center grow">
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
