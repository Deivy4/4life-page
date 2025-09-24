"use client";
import Link from "next/link";
import { useState } from "react";
import PopupPaises from "@/components/PopupPaises";
import PopupNavigator from "@/components/PopupNavigator";
import { usePaisContext } from "@/context/PaisContext";
import { useAuth } from "@/context/AuthContext";

export default function TopBar() {
  const { user, logout } = useAuth();
  console.log("user :::::" + user);
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
      <nav className="fixed top-0 z-50 flex w-full items-center justify-center bg-blue-800 px-1">
        <Link
          href={"/"}
          className="cursor-pointer py-3 flex items-center justify-center gap-4 min-w-64"
        >
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
          <p className="text-white ">4Life Protección inmunitaria</p>
        </Link>
        <div className="w-8 sm:hidden ml-3">
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
        <Link
          href={"/testimonios"}
          className="hover:bg-white transition duration-300 ease-in-out hover:text-blue-700 p-2 rounded-sm text-white hidden cursor-pointer  sm:flex items-center justify-center gap-4 ml-28"
        >
          Testimonios
        </Link>
        {user && (
          <Link
            href={"/stock-products"}
            className="hover:bg-white transition duration-300 ease-in-out hover:text-blue-700 p-2 rounded-sm text-white hidden cursor-pointer  sm:flex items-center justify-center gap-4 ml-28"
          >
            Stock
          </Link>
        )}
        {!user && (
          <Link
            href={"/login"}
            className="hover:bg-white transition duration-300 ease-in-out hover:text-blue-700 p-2 rounded-sm text-white hidden cursor-pointer  sm:flex items-center justify-center gap-4 ml-16"
          >
            Login
          </Link>
        )}
        {user && (
          <div
            onClick={async (e) => {
              e.preventDefault();
              await logout();
            }}
            className="hover:bg-white transition duration-300 ease-in-out hover:text-blue-700 p-2 rounded-sm text-white hidden cursor-pointer  sm:flex items-center justify-center gap-4 ml-16"
          >
            Logout
          </div>
        )}

        {/*este es el icono de navbar movi*/}
        <div className=" sm:hidden cursor-pointer w-12 ml-4">
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
