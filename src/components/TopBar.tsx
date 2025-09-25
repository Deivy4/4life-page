"use client";
import Link from "next/link";
import { useState } from "react";
import PopupPaises from "@/components/PopupPaises";
import PopupNavigator from "@/components/PopupNavigator";
import { usePaisContext } from "@/context/PaisContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
export default function TopBar() {
  const router = useRouter();
  const { user, logout, loading } = useAuth(); // 👈 incluimos loading
  const { setCurrentPais, getCurrentPais } = usePaisContext();

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopupNavigatorVisible, setIsPopupNavigatorVisible] = useState(false);
  let paisActive = getCurrentPais();

  const togglePais = (newPais: string) => {
    setCurrentPais({ pais: newPais });
    setIsPopupVisible(false);
  };

  const togglePopup = () => {
    if (isPopupVisible && !isPopupNavigatorVisible) {
      setIsPopupNavigatorVisible(false);
    }
    setIsPopupVisible(!isPopupVisible);
  };

  const togglePopupNavigator = () => {
    if (!isPopupVisible && isPopupNavigatorVisible) {
      setIsPopupVisible(false);
    }
    setIsPopupNavigatorVisible(!isPopupNavigatorVisible);
  };

  const urlIconNavbar = "/images-icons/icons8-menú-128.png";
  const flagUrl =
    paisActive === "Colombia"
      ? "https://res.cloudinary.com/dt4pkrj5j/image/upload/v1738764991/photos/bandera-colombia_z1l020.png"
      : "https://res.cloudinary.com/dt4pkrj5j/image/upload/v1738764991/photos/bandera-argentina_lhc5ru.png";

  return (
    <>
      <div className="container mx-auto w-full justify-center items-center flex">
        <nav className="fixed top-0 z-50 flex w-full items-center justify-center bg-blue-800 px-1">
          {/* LOGO */}
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
            <p className="text-white">4Life Protección inmunitaria</p>
          </Link>

          {/* BANDERA MOBILE */}
          <div className="w-8 sm:hidden lg:ml-3">
            <img
              onClick={(e) => {
                e.preventDefault();
                togglePopup();
              }}
              className="cursor-pointer"
              src={flagUrl}
              alt="Bandera"
            />
          </div>

          {/* LINKS DESKTOP */}
          <Link
            href={"/testimonios"}
            className="hover:bg-white transition duration-300 ease-in-out hover:text-blue-700 p-2 rounded-sm text-white hidden cursor-pointer sm:flex items-center justify-center gap-4 lg:ml-28"
          >
            Testimonios
          </Link>

          {/* 👇 solo renderizar después de loading */}
          {!loading && user && (
            <Link
              href={"/stock-products"}
              className="hover:bg-white transition duration-300 ease-in-out hover:text-blue-700 p-2 rounded-sm text-white hidden cursor-pointer sm:flex items-center justify-center gap-4 lg:ml-16"
            >
              Stock
            </Link>
          )}
          {!loading && !user && (
            <Link
              href={"/login"}
              className="hover:bg-white transition duration-300 ease-in-out hover:text-blue-700 p-2 rounded-sm text-white hidden cursor-pointer sm:flex items-center justify-center gap-4 lg:ml-16"
            >
              Login
            </Link>
          )}
          {!loading && user && (
            <div
              onClick={async (e) => {
                e.preventDefault();
                await logout();
                router.replace("/");
              }}
              className="hover:bg-white transition duration-300 ease-in-out hover:text-blue-700 p-2 rounded-sm text-white hidden cursor-pointer sm:flex items-center justify-center gap-4 lg:ml-16"
            >
              Logout
            </div>
          )}

          {/* ICONO NAVBAR MOBILE */}
          <div className="sm:hidden cursor-pointer w-12 ml-4">
            <img
              onClick={(e) => {
                e.preventDefault();
                togglePopupNavigator();
              }}
              className="cursor-pointer"
              src={urlIconNavbar}
              alt="navbar movil"
            />
          </div>

          {/* BANDERA DESKTOP */}
          <div className="hidden text-white sm:w-full sm:flex justify-end max-w-[800px]">
            <div className="w-8 mr-8">
              <img
                onClick={(e) => {
                  e.preventDefault();
                  togglePopup();
                }}
                className="cursor-pointer"
                src={flagUrl}
                alt="Bandera"
              />
            </div>
          </div>
        </nav>
      </div>

      {/* Render diferido de popups */}
      {isPopupVisible && (
        <PopupPaises togglePopup={togglePopup} togglePais={togglePais} />
      )}
      {isPopupNavigatorVisible && (
        <PopupNavigator toggleNavigator={togglePopupNavigator} />
      )}
    </>
  );
}
