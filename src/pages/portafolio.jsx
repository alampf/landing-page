import React from 'react';

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#0d1117] text-[#c9d1d9] py-20 px-6 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full text-center">

        {/* Título principal */}
        <h1 className="text-4xl font-bold text-[#58a6ff] mb-10">
          Portafolio
        </h1>

        {/* Sección Inicio */}
        <div className="mb-10 p-6 rounded-xl bg-[#161b22] shadow-md">
          <h2 className="text-2xl font-semibold text-[#79c0ff] mb-3">
            Inicio
          </h2>
          <p className="leading-relaxed text-gray-300">
            Contenido pendiente...
          </p>
        </div>

        {/* Sección Proyectos */}
        <div className="p-6 rounded-xl bg-[#161b22] shadow-md">
          <h2 className="text-2xl font-semibold text-[#79c0ff] mb-3">
            Proyectos
          </h2>
          <p className="leading-relaxed text-gray-300">
            Contenido pendiente.......
          </p>
        </div>

      </div>
    </section>
  );
}