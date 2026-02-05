"use client";

const posts = [
  {
    id: 1,
    title: "Acompañando procesos de bienestar",
    date: "Septiembre 2025",
    content:
      "Seguimos acompañando a más personas en su camino hacia una vida con más energía, equilibrio y bienestar. Cada día sumamos nuevas experiencias y aprendizajes.",
    image:
      "https://res.cloudinary.com/dt4pkrj5j/image/upload/v1770250008/product_ritestart_men_us_cdqynk.webp",
  },
  {
    id: 2,
    title: "Charlas y asesorías personalizadas",
    date: "Agosto 2025",
    content:
      "Estamos realizando asesorías personalizadas para ayudar a cada persona a encontrar el producto adecuado según sus necesidades.",
    video:
      "https://res.cloudinary.com/dt4pkrj5j/video/upload/v1756004871/Testimonio-azu_azkayf.mp4",
  },
];

export default function NuestraVision() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container max-w-6xl mx-auto px-4">
        {/* VISIÓN */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Nuestra visión
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Creemos en acompañar a las personas en su camino hacia una vida más
            saludable, con información clara, productos de calidad y un enfoque
            humano. Nuestro compromiso es generar bienestar real, sostenible y
            accesible, construyendo una comunidad basada en la confianza y el
            crecimiento personal.
          </p>
        </div>

        {/* PUBLICACIONES */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Novedades
          </h3>

          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                {/* Imagen o video */}
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                )}

                {post.video && (
                  <video controls className="w-full h-56 object-cover bg-black">
                    <source src={post.video} type="video/mp4" />
                  </video>
                )}

                {/* Contenido */}
                <div className="p-6 flex flex-col gap-3">
                  <span className="text-sm text-gray-500">{post.date}</span>

                  <h4 className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </h4>

                  <p className="text-gray-700 leading-relaxed">
                    {post.content}
                  </p>

                  <a
                    href="#seccion-products"
                    className="mt-2 text-blue-600 font-medium hover:underline"
                  >
                    Conocer más →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
