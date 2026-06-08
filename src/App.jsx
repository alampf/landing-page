import { useState } from 'react'
import Contact from './pages/contact'
import Portfolio from './pages/portafolio'
import About from './components/About'

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <main>
      <Portfolio/>
      <Contact />
      <About />
      </main>
    </div>
  )
}

export default App
