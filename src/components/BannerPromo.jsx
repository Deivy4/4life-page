"use client"; // components/BannerPromoTailwind.tsx
import React from "react";
import { useAfiliados } from "@/context/AfiliadosContext";

const BannerPromo = () => {
  const { GetAfiliado } = useAfiliados();

  return (
    <section className="w-full relative bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-700 py-20 overflow-hidden">
      {/* Animaciones de fondo con pseudo-bolas flotantes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <span className="absolute w-6 h-6 bg-white opacity-20 rounded-full animate-bounce-slow top-10 left-1/4"></span>
        <span className="absolute w-4 h-4 bg-white opacity-20 rounded-full animate-bounce-slow top-1/2 left-3/4"></span>
        <span className="absolute w-5 h-5 bg-white opacity-20 rounded-full animate-bounce-slow bottom-10 right-1/3"></span>
      </div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-6 md:px-16 relative z-10">
        {/* Texto del producto */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center md:text-left drop-shadow-lg animate-pulse">
            ¡Paquete de Inicio Acelerado{" "}
            <span className="text-cyan-300"> Completo 4.0</span>!
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white text-center md:text-left leading-relaxed drop-shadow-md">
            Adquiere este paquete con diferentes productos exclusivos 4Life que
            aportan diferentes beneficios para tu bienestar general. ¡Al
            adquirir este paquete automáticamente desbloqueas los beneficios del
            Programa de Inicio Acelerado*!
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => {
                window.open(
                  `https://colombia.4life.com/${
                    GetAfiliado().numeroAfiliado
                  }/product/paquete-de-inicio-acelerado-completo-40/4251`,
                  "_blank"
                );
              }}
              className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-400 text-white font-bold px-8 py-4 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-cyan-300/70 hover:rotate-1 hover:brightness-125"
            >
              Ver más información
            </button>
          </div>
        </div>

        {/* Imagen del producto */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="bg-white rounded-3xl shadow-2xl p-6 flex justify-center items-center transform transition-transform duration-500 hover:scale-105 hover:rotate-1">
            <img
              src="/PIA_Completo_4_1000x1000.png"
              alt="Glutamine Prime 4Life"
              className="w-full max-w-[400px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerPromo;
