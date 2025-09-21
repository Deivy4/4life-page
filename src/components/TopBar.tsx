"use client";
import Link from "next/link";
import { useState } from "react";
import PopupPaises from "@/components/PopupPaises";
import PopupNavigator from "@/components/PopupNavigator";
import { usePaisContext } from "@/context/PaisContext";

export default function TopBar() {
  const { setCurrentPais, getCurrentPais } = usePaisContext();

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopupNavigatorVisible, setIsPopupNavigatorVisible] = useState(false);
  let paisActive = getCurrentPais();

  const togglePais = (newPais: string) => {
    setCurrentPais({ pais: newPais });
    setIsPopupVisible(false);
  };

  const togglePopup = () => {
    if (isPopupVisible && !isPopupNavigatorVisible)
      setIsPopupNavigatorVisible(false);
    setIsPopupVisible(!isPopupVisible);
  };
  const togglePopupNavigator = () => {
    if (!isPopupVisible && isPopupNavigatorVisible) setIsPopupVisible(false);
    setIsPopupNavigatorVisible(!isPopupNavigatorVisible);
  };
  const urlIconNavbar = "/images-icons/icons8-menú-128.png";
  // Determinamos qué bandera mostrar en base al país activo
  const flagUrl =
    paisActive === "Colombia"
      ? "https://res.cloudinary.com/dt4pkrj5j/image/upload/v1738764991/photos/bandera-colombia_z1l020.png"
      : "https://res.cloudinary.com/dt4pkrj5j/image/upload/v1738764991/photos/bandera-argentina_lhc5ru.png";

  return (
    <div className="container mx-auto w-full justify-center items-center flex">
      <nav className="fixed top-0 z-50 flex w-full items-center justify-center bg-blue-800 px-2">
        <div className="cursor-pointer py-3 flex items-center justify-center gap-4 min-w-44">
          <img
            src="/images-icons/icono_test.png"
            className="rounded-full text-yellow-300 mb-1"
            style={{
              minHeight: "30px",
              maxHeight: "30px",
              maxWidth: "30px",
              minWidth: "30px",
            }}
          />
          <p className="text-white">4Life Protección inmunitaria</p>
          <div className="w-8 sm:hidden">
            <img
              onClick={(e) => {
                e.preventDefault(); // evita que el Link navegue
                togglePopup();
              }}
              className="cursor-pointer"
              src={flagUrl}
              alt="Bandera"
            />
          </div>
        </div>
        <Link
          href={"/testimonios"}
          className=" hidden cursor-pointer sm:py-3 sm:flex items-center justify-center gap-4 sm:min-w-44"
        >
          <p className="text-white">Testimonios</p>
        </Link>
        {/*este es el icono de navbar movi*/}
        <div className=" sm:hidden cursor-pointer w-12 ml-8">
          <img
            onClick={(e) => {
              e.preventDefault(); // evita que el Link navegue
              togglePopupNavigator();
            }}
            className="cursor-pointer"
            src={urlIconNavbar}
            alt="navbar movil"
          />
        </div>
        <div className="hidden text-white sm:w-full sm:flex justify-end max-w-[800px]">
          <div className="w-8 mr-8">
            <img
              onClick={(e) => {
                e.preventDefault(); // evita que el Link navegue
                togglePopup();
              }}
              className="cursor-pointer"
              src={flagUrl}
              alt="Bandera"
            />
          </div>
        </div>
      </nav>
      {isPopupVisible && (
        <PopupPaises togglePopup={togglePopup} togglePais={togglePais} />
      )}
      {isPopupNavigatorVisible && (
        <PopupNavigator toggleNavigator={togglePopupNavigator} />
      )}
    </div>
  );
}
