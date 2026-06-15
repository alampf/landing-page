import React from 'react'

export default function Contact() {
  return (
    <section id="contact" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6 lg:px-12">
        
        {/* <!-- Encabezado --> */}
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900">
                Contáctanos
            </h2>
            <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
                ¿Tienes alguna duda o propuesta? Estamos listos para ayudarte.
                Envíanos un mensaje y te responderemos lo antes posible.
            </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">

            {/* <!-- Información --> */}
            <div class="bg-white rounded-2xl shadow-lg p-8">
                <h3 class="text-2xl font-semibold text-gray-900 mb-6">
                    Información de Contacto
                </h3>

                <div class="space-y-6">

                    <div class="flex items-start gap-4">
                        <div class="bg-blue-100 p-3 rounded-lg">
                            📍
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800">Dirección</h4>
                            <p class="text-gray-600">
                                Huamantla, Tlaxcala, México
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <div class="bg-green-100 p-3 rounded-lg">
                            📞
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800">Teléfono</h4>
                            <p class="text-gray-600">
                                +52 247 123 4567
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <div class="bg-purple-100 p-3 rounded-lg">
                            ✉️
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800">Correo</h4>
                            <p class="text-gray-600">
                                contacto@empresa.com
                            </p>
                        </div>
                    </div>

                </div>

                <div class="mt-10">
                    <h4 class="font-semibold text-gray-800 mb-4">
                        Síguenos
                    </h4>

                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-110 transition">
                            F
                        </a>

                        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-pink-600 text-white hover:scale-110 transition">
                            I
                        </a>

                        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition">
                            X
                        </a>

                        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:scale-110 transition">
                            in
                        </a>
                    </div>
                </div>
            </div>

            {/* <!-- Formulario --> */}
            <div class="bg-white rounded-2xl shadow-lg p-8">
                <h3 class="text-2xl font-semibold text-gray-900 mb-6">
                    Envíanos un mensaje
                </h3>

                <form class="space-y-6">

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            placeholder="Tu nombre"
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            placeholder="correo@ejemplo.com"
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Asunto
                        </label>
                        <input
                            type="text"
                            placeholder="Asunto"
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Mensaje
                        </label>
                        <textarea
                            rows="5"
                            placeholder="Escribe tu mensaje..."
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        class="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                    >
                        Enviar Mensaje
                    </button>

                </form>
            </div>

        </div>
    </div>
</section>
  )
}
