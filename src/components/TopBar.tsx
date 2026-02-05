"use client";

import Link from "next/link";
import { useState } from "react";
import PopupNavigator from "@/components/PopupNavigator";

export default function TopBar() {
  const [isPopupNavigatorVisible, setIsPopupNavigatorVisible] = useState(false);

  const togglePopupNavigator = () => {
    setIsPopupNavigatorVisible(!isPopupNavigatorVisible);
  };

  const urlIconNavbar = "/images-icons/icons8-menú-128.png";

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-700 shadow-lg backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src="/images-icons/logo_Sb.png"
              alt="Logo"
              className="h-10 w-10 rounded-full border-2 border-white shadow-sm bg-white"
            />
            <span className="text-white font-semibold text-lg drop-shadow-md">
              Protección inmunitaria
            </span>
          </Link>
          <div className="hidden sm:flex items-center gap-6">
            {/* LINKS DESKTOP */}
            <div className="">
              <Link
                href="/contacto"
                className="text-white hover:text-cyan-300 transition-colors duration-300 font-medium"
              >
                Contacto
              </Link>
            </div>
            {/* LINKS DESKTOP */}
            <div className="">
              <Link
                href="/nuestra-vision"
                className="text-white hover:text-cyan-300 transition-colors duration-300 font-medium"
              >
                Nuestra visión
              </Link>
            </div>
          </div>

          {/* ICONO NAVBAR MOBILE */}
          <div className="sm:hidden flex items-center">
            <img
              src={urlIconNavbar}
              alt="Menu"
              className="h-8 w-8 cursor-pointer"
              onClick={togglePopupNavigator}
            />
          </div>
        </div>
      </nav>

      {/* POPUP NAVIGATOR MOBILE */}
      {isPopupNavigatorVisible && (
        <PopupNavigator toggleNavigator={togglePopupNavigator} />
      )}
    </>
  );
}
