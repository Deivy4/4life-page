"use client"; // components/Banner.tsx
import React from "react";
import { useAfiliados } from "@/context/AfiliadosContext";

const InfoProductUnique = () => {
  const { GetAfiliado } = useAfiliados();

  return (
    <section className="w-full bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 px-6 md:px-16">
        {/* Texto del producto */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#e7a268] text-center md:text-left">
            Glutamine Prime
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center md:text-left leading-relaxed">
            Complementa tu dieta y promueve el bienestar general de tu organismo
            con este suplemento dietario exclusivo de 4Life a base de
            L-Glutamina y otros aminoácidos que complementan tu dieta y
            promueven el bienestar de tu organismo.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => {
                window.open(
                  `https://colombia.4life.com/${
                    GetAfiliado().numeroAfiliado
                  }/product/glutamine-prime---colombia/3870`,
                  "_blank"
                );
              }}
              className="bg-blue-800 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
            >
              Ver más información
            </button>
          </div>
        </div>

        {/* Imagen del producto */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 flex justify-center items-center">
            <img
              src="https://media2.4life.com/products/Publicitaria_Glutamine_1000x1000.png?width=1000&mode=crop&quality=80"
              alt="Producto 4Life"
              className="w-full max-w-[400px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoProductUnique;
