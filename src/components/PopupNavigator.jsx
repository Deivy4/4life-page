"use client";
import { useEffect, useState } from "react";
import { pages as allPages } from "@/app/data/pages.json";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function PopupNavigator({ toggleNavigator }) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isActiveEffectSlide, setisActiveEffectSlide] = useState(false);

  const filteredPages = user
    ? allPages.filter((x) => x.name !== "Login")
    : allPages.filter((x) => x.name !== "Logout" && x.name !== "Stock");

  useEffect(() => {
    // Bloquea el scroll cuando el popup está visible
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setisActiveEffectSlide(true);
    }, 200);
    // Vuelve al comportamiento normal de scroll cuando el popup se cierra
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className={`${
          isActiveEffectSlide ? "animate-slideIn" : "hidden"
        } flex flex-col w-[30%] h-[35%] bg-white min-w-[260px] min-h-[00px] rounded-t`}
      >
        {/* Header */}
        <div className="bg-blue-800 w-full text-white px-4 py-1 rounded-t flex justify-between items-center">
          <h2>Páginas</h2>
          <p onClick={toggleNavigator} className="cursor-pointer">
            X
          </p>
        </div>

        {/* Contenedor scrollable */}
        <div className="flex flex-col bg-white py-6 px-6 gap-3 w-full items-center overflow-y-auto">
          {filteredPages.map((item, index) => {
            if (item.name === "Logout") {
              return (
                <div
                  key={index}
                  onClick={async (e) => {
                    e.preventDefault();
                    await logout();
                    toggleNavigator();
                    router.replace("/"); // Redirige al home y reemplaza historial
                  }}
                  className="cursor-pointer min-h-8 justify-center items-center gap-8 w-[80%] flex text-xs sm:text-lg bg-blue-800 text-white hover:bg-blue-700 px-3 py-2 rounded-lg font-bold shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {item.name}
                </div>
              );
            }
            return (
              <Link
                key={index}
                onClick={toggleNavigator}
                href={item.navigateTo}
                className="min-h-8 justify-center items-center gap-8 w-[80%] flex text-xs sm:text-lg bg-blue-800 text-white hover:bg-blue-700 px-3 py-2 rounded-lg font-bold shadow-lg transition-all duration-300 hover:scale-105"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
