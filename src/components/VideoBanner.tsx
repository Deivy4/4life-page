"use client"

const VideoBanner = () => {
  return (
    <div className="container w-full text-gray-700 flex justify-stretch items-center sm:my-10">
  <div className="sm:px-4 flex flex-col sm:flex-row items-center justify-stretch py-10 md:pr-0 gap-4 sm:gap-0 w-full">
    
    {/* Imagen del Producto */}
    <div className="w-[70%] sm:w-[50%] h-full flex justify-center pt-3">
      <img
        className="w-full min-w-[190px] sm:min-w-[300px] max-w-[600px] rounded"
        src="https://media2.4life.com/products/TF_Boost_Secondary_1.jpg?width=1000&mode=crop&quality=80"
        alt="TF-Boost"
      />
    </div>

    {/* Descripción del Producto */}
    <div className="w-full px-4 sm:w-[70%] sm:min-w-[360px] h-full max-h-[600px] flex justify-center">
      <div className="w-full sm:w-[90%] gap-6 flex flex-col">

        {/* Título y Descripción */}
        <div className="w-full flex justify-center flex-col text-center">
          <h2 className="my-3 text-4xl text-center text-blue-800 font-bold">
            TF-Boost
          </h2>

          <p>
            El exclusivo producto de 4Life con 1.000 mg de vitamina C. Disfruta de esta conveniente bebida en polvo con un exquisito sabor a naranja, perfecta para fortalecer tu bienestar. Viene en prácticos sobres, ideales para llevar y consumir en cualquier momento y lugar. ¡Anímate a probarla y disfruta su increíble sabor!
          </p>

          {/* Video del Producto */}
          <div className="aspect-video h-full  flex items-center justify-center w-full mt-4">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src="https://www.youtube.com/embed/Bbm-uahhlOU?si=QPnch2kQqx0HB6B8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>



  );
};

export default VideoBanner;

