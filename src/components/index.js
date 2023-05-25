// import './App.css';
import NavBar from './NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import NotFound from './pages/NotFound'

function App() {
  return (
    <main className='px-5 py-1 h-screen bg-gradient-to-r from-sky-500 to-indigo-500'>

    <BrowserRouter>
    <NavBar />
    <article className='p-3 h-5/6'>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/aboutme' element={<AboutMe />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </article>
    </BrowserRouter>
    </main>
  );
}

export default App;
