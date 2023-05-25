// import './App.css';
import NavBar from './Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import AboutMe from './Pages/AboutMe'
import NotFound from './Pages/NotFound'

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
