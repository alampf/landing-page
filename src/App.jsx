import './App.css'

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav>
        <div className="logo">RESTAURANTE </div>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="#menu">menu</a></li>
        </ul>
      </nav>

      {/* INICIO */}
      <section id="inicio">
        <h1>Soluciones digitales modernas</h1>
        <p></p>
      </section>

      {/* SERVICIOS */}
      <section id="servicios">
        <h2>Servicios</h2>
        <p></p>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros">
        <h2>Nosotros</h2>
        <p></p>
      </section>

      {/* CONTACTO */}
      <section id="contacto">
        <h2>Contacto</h2>
        <p>Email: contacto@software.com</p>
      </section>
    </>
  )
}

export default App