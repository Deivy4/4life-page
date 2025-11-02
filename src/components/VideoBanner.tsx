"use client";

const VideoBanner = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-6 md:px-16">
        {/* Texto y video */}
        <div className="flex-1 flex flex-col justify-center gap-6 animate-fadeInLeft">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-800 text-center md:text-left">
            TF-Boost
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center md:text-left">
            El exclusivo producto de 4Life con 1.000 mg de vitamina C. Disfruta
            de esta bebida en polvo con un exquisito sabor a naranja, perfecta
            para fortalecer tu bienestar. Viene en prácticos sobres, ideales
            para llevar y consumir en cualquier momento y lugar.
          </p>

          {/* Video */}
          <div className="w-full flex justify-center md:justify-start mt-6 animate-fadeInUp">
            <div className="w-full max-w-lg aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transition-transform duration-500 hover:scale-105">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Bbm-uahhlOU?si=QPnch2kQqx0HB6B8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Imagen del producto */}
        <div className="flex-1 flex justify-center md:justify-end animate-fadeInRight">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 flex justify-center items-center transition-transform duration-500 hover:scale-105">
            <img
              className="w-full max-w-[400px] rounded-2xl"
              src="https://media2.4life.com/products/TF_Boost_Secondary_1.jpg?width=1000&mode=crop&quality=80"
              alt="TF-Boost"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
