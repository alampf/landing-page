import { useState } from 'react'
import Contact from './pages/contact'
import Portfolio from './pages/portafolio'

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <main>
      <Portfolio/>
      <Contact />
      </main>
    </div>
  )
}

export default App
