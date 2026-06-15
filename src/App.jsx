import { useState } from 'react';
import Navbar from './components/Navbar';
import Contact from './pages/contact';
import Portfolio from './pages/portafolio';
import Home from './pages/home';
import About from './components/About';

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      {/* Navbar */}
      <Navbar />
      <Home />
      {/* Contenido */}
      <main>
        <Portfolio />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
