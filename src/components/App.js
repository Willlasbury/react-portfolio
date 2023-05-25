// import './App.css';
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col px-5 py-1 h-screen bg-gradient-to-r from-sky-500 to-indigo-500 ">
     
        <BrowserRouter>
        <header>
        <NavBar />

        </header>

      <main className="h-screen">
          <article className="p-3 h-5/6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </article>
        {/* <Footer /> */}
      </main>
          <Footer />
 
        </BrowserRouter>

    </div>
  );
}

export default App;
