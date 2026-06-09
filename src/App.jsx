import { useState } from 'react';
import Navbar from './components/Navbar';
import Contact from './pages/contact';
import Portfolio from './pages/portafolio';
import home from './pages/home';
import About from './components/About';

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      {/* Navbar */}
      <Navbar />
      <About />
      <home />
      {/* Contenido */}
      <main>
        <Portfolio />
        <Contact />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
