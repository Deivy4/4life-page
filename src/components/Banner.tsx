// components/Banner.tsx
import React from 'react';

const Banner = () => {
    return (
        <div className="p-6 bg-center text-gray-700 flex justify-center items-center relative">
            <div className="flex items-center justify-center flex-col sm:flex-row pb-10 sm:gap-8 md:gap-0">
                <div className="w-[90%] sm:w-[50%] h-[50%] flex max-w-[1000px]">
                    <div className="flex-1"></div>
                    <div className="w-full md:w-[80%] gap-6 flex flex-col">
                        <h1 className="text-4xl font-bold text-shadow-lg">
                            {"BIENESTAR Y SALUD A TU ALCANCE"}
                        </h1>
                        <p className="text-lg leading-relaxed mb-6">
                            {"Descubre nuestra línea exclusiva de productos 4Life, diseñados para fortalecer tu sistema inmunológico y mejorar tu calidad de vida. Vive mejor, siéntete mejor."}
                        </p>
                        
                        {/* Llamado a la acción */}
                        <a
                            href="#seccion-products"
                            className="bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-lg text-xl font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-blue-600"
                            >
                            Ver Productos
                        </a>
                        <img className='w-32' src="https://res.cloudinary.com/dt4pkrj5j/image/upload/v1738765035/photos/Logo-4Life-Afiliado-Independiente-.png_sz8vck.webp" alt="" />
                        
                    </div>
                </div>
                <div className="w-[50%] h-[50%] flex justify-center pt-3">
                    <img
                        alt="Productos 4Life"
                        className="w-[45%] min-w-[300px] max-w-[750px] rounded-lg shadow-lg"
                        src={"https://res.cloudinary.com/dt4pkrj5j/image/upload/v1738765035/photos/Imagen-Afiliados_begkqj.jpg"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
