// components/Banner.tsx
import React from 'react';

const Banner = () => {
    return (
        <div className="p-6 bg-cover bg-center text-white flex justify-center items-center relative"
             style={{ backgroundImage: 'url(/images/banner-bg.jpg)' }}>
            <div className="flex items-center justify-center flex-col sm:flex-row pb-10">
                <div className="w-[80%] sm:w-[50%] h-[50%] flex">
                    <div className="flex-1"></div>
                    <div className="w-full sm:w-[80%] gap-6 flex flex-col">
                        <h1 className="text-4xl font-bold text-shadow-lg">
                            {"Bienestar y Salud a Tu Alcance"}
                        </h1>
                        <p className="text-lg leading-relaxed mb-6">
                            {"Descubre nuestra línea exclusiva de productos 4Life, diseñados para fortalecer tu sistema inmunológico y mejorar tu calidad de vida. Vive mejor, siéntete mejor."}
                        </p>
                        
                        {/* Llamado a la acción */}
                        <a
                            href="#seccion-products"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg text-xl transition-all duration-300 hover:bg-blue-500"
                        >
                            Ver Productos
                        </a>
                    </div>
                </div>
                <div className="w-[50%] h-[50%] flex justify-center">
                    <img
                        alt="Productos 4Life"
                        className="w-[45%] min-w-[300px] rounded-lg shadow-lg"
                        src={"/test-image-removebg-preview.png"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
