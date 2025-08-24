// components/Testimonio.tsx
"use client";

export default function Testimonio() {
  return (
    <section className="container w-full text-gray-700 flex justify-stretch items-center sm:my-10">
      <div className="flex flex-col justify-center items-center w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Nuestros testimonios
        </h2>

        <div className="items-stretch max-w-6xl w-full bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
          {/* Video del testimonio */}
          <video controls className="w-full md:w-1/3 h-80 rounded-xl shadow-md">
            <source
              src="https://res.cloudinary.com/dt4pkrj5j/video/upload/v1756004871/Testimonio-azu_azkayf.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta video.
          </video>

          {/* Texto del testimonio */}
          <div className="flex flex-col text-left md:w-2/3 justify-around">
            <div>
              <p className="text-lg italic text-gray-700 mb-4">
                Muchas veces escuchamos algo que nos recuerda que sí hay una
                manera de recuperar el bienestar y la energía. Este testimonio
                es la prueba de que cuando decidís dar un paso por tu salud
                transforma tu cuerpo y tu manera de ver la vida. Espero que
                nuestro testimonio les sirva de ayuda a los que lo necesiten.
                Estamos para contarle cómo puede comenzar su propio camino de
                transformación.
              </p>
              <p className="font-semibold text-gray-900 mt-2">— Azul Lara</p>
            </div>
            <div className="flex flex-col items-end w-full">
              <div className="flex gap-1 text-yellow-500 mt-2">⭐⭐⭐⭐⭐</div>
              <a
                href="#seccion-products"
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
              >
                Conoce más
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
