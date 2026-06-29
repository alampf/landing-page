function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0d1117] text-[#c9d1d9] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#58a6ff] mb-4">
            Contáctanos
          </h2>

          <p className="text-lg text-[#c9d1d9] max-w-2xl mx-auto">
            Estamos listos para ayudarte. Envíanos un mensaje y nos
            pondremos en contacto contigo lo antes posible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Información */}
          <div className="bg-[#161b22] p-8 rounded-2xl border border-[#30363d]">

            <h3 className="text-2xl font-semibold text-[#79c0ff] mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="font-semibold text-[#58a6ff]">
                  📍 Dirección
                </h4>
                <p className="text-[#c9d1d9]">
                  Huamantla, Tlaxcala, México
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#58a6ff]">
                  📞 Teléfono
                </h4>
                <p className="text-[#c9d1d9]">
                  +52 247 123 4567
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#58a6ff]">
                  ✉️ Correo
                </h4>
                <p className="text-[#c9d1d9]">
                  contacto@empresa.com
                </p>
              </div>
            </div>

            {/* Redes */}
            <div className="mt-10">
              <h4 className="font-semibold text-[#79c0ff] mb-4">
                Redes Sociales
              </h4>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#21262d] border border-[#30363d] flex items-center justify-center hover:border-[#58a6ff] hover:text-[#58a6ff] transition"
                >
                  F
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#21262d] border border-[#30363d] flex items-center justify-center hover:border-[#58a6ff] hover:text-[#58a6ff] transition"
                >
                  I
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#21262d] border border-[#30363d] flex items-center justify-center hover:border-[#58a6ff] hover:text-[#58a6ff] transition"
                >
                  X
                </a>
              </div>
            </div>

          </div>

          {/* Formulario */}
          <div className="bg-[#161b22] p-8 rounded-2xl border border-[#30363d]">

            <h3 className="text-2xl font-semibold text-[#79c0ff] mb-6">
              Envíanos un Mensaje
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Nombre"
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-[#c9d1d9] focus:outline-none focus:border-[#58a6ff]"
              />

              <input
                type="email"
                placeholder="Correo Electrónico"
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-[#c9d1d9] focus:outline-none focus:border-[#58a6ff]"
              />

              <input
                type="text"
                placeholder="Asunto"
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-[#c9d1d9] focus:outline-none focus:border-[#58a6ff]"
              />

              <textarea
                rows="5"
                placeholder="Escribe tu mensaje..."
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-[#c9d1d9] focus:outline-none focus:border-[#58a6ff]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#58a6ff] text-[#0d1117] font-semibold py-3 rounded-lg hover:bg-[#79c0ff] transition duration-300"
              >
                Enviar Mensaje
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;