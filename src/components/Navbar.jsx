import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold">MiApp</h1>

        {/* Botón móvil */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menú desktop */}
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-blue-400 cursor-pointer">Inicio</li>
          <li className="hover:text-blue-400 cursor-pointer">Servicios</li>
          <li className="hover:text-blue-400 cursor-pointer">Contacto</li>
        </ul>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <ul className="mt-4 flex flex-col gap-3 md:hidden">
          <li className="hover:text-blue-400 cursor-pointer">Inicio</li>
          <li className="hover:text-blue-400 cursor-pointer">Servicios</li>
          <li className="hover:text-blue-400 cursor-pointer">Contacto</li>
        </ul>
      )}
    </nav>
  );
}