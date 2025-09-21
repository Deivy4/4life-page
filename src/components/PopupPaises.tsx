"use client";
import React, { useEffect } from "react";

export default function PopupPaises({
  togglePopup,
  togglePais,
}: {
  togglePopup: () => void;
  togglePais: (pais: string) => void;
}) {
  useEffect(() => {
    // Bloquea el scroll cuando el popup está visible
    document.body.style.overflow = "hidden";

    // Vuelve al comportamiento normal de scroll cuando el popup se cierra
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); // Solo se ejecuta cuando el componente se monta y desmonta
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col w-[30%] h-[20%] bg-white min-w-[260px] min-h-[120px] rounded-t">
        <div className="text-dynamic bg-blue-800 min-h-10 w-full text-white px-4 py-3 rounded-x rounded-t flex justify-between items-center h-[20%]">
          <h2>Países</h2>
          <p onClick={togglePopup} className="cursor-pointer">
            X
          </p>
        </div>
        <div className="flex flex-col bg-white py-4 px-6 gap-3 rounded-y w-full items-center justify-center h-full">
          <button
            onClick={() => togglePais("Colombia")}
            className="h-[20%] min-h-8 justify-center items-center gap-8 w-[50%] flex text-xs sm:text-xl min-w-[230px] bg-blue-800 text-white hover:bg-blue-700 px-3 py-1 rounded-lg font-bold shadow-lg transition-all duration-300 hover:scale-105"
          >
            <h4 className="text-dynamic">Colombia</h4>
            <img
              className="w-6 cursor-pointer"
              src="https://res.cloudinary.com/dt4pkrj5j/image/upload/v1738764991/photos/bandera-colombia_z1l020.png"
              alt=""
            />
          </button>
          <button
            onClick={() => togglePais("Argentina")}
            className="h-[20%] min-h-8 justify-center items-center gap-8 w-[50%] flex min-w-[230px] bg-blue-800 text-white hover:bg-blue-700 px-3 py-1 rounded-lg font-bold shadow-lg transition-all duration-300 hover:scale-105"
          >
            <h4 className="text-dynamic">Argentina</h4>
            <img
              className="w-6 cursor-pointer"
              src="https://res.cloudinary.com/dt4pkrj5j/image/upload/v1738764991/photos/bandera-argentina_lhc5ru.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}
