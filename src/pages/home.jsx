export default function Home() {
  return (
    <section
      id="home"
      className="bg-[#0d1117] text-[#c9d1d9] min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center">

        {/* Título principal */}
        <h1 className="text-5xl font-bold text-[#58a6ff] mb-6">
          Bienvenido a mi página
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Proyecto construido con React y Tailwind CSS 🚀
        </p>

        {/* Card informativa */}
        <div className="bg-[#161b22] p-6 rounded-xl shadow-md">
          <p className="text-gray-400 leading-relaxed">
            Este es un proyecto en desarrollo donde estoy practicando diseño moderno,
            componentes reutilizables y estructura profesional en React.
          </p>
        </div>

      </div>
    </section>
  );
}