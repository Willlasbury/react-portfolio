// import './App.css';
import NavBar from './Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App(pages) {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
