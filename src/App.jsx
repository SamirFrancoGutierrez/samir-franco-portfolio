import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar';
import Themes from './components/themes';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

function App() {
  return( 
    <BrowserRouter>
      <Navbar />
      <Themes/>
      <Routes>
        <Route index element={<Home />} />
        <Route path='https://www.portafolio.samirfranco.tech/about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
        <Route path='https://www.portafolio.samirfranco.tech' element={<Home/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
