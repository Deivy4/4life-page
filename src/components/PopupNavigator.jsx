"use client";
import { useEffect, useState } from "react";
import { pages as allPages } from "@/app/data/pages.json";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PopupNavigator({ toggleNavigator }) {
  const router = useRouter();
  const [isActiveEffectSlide, setisActiveEffectSlide] = useState(false);

  const filteredPages = allPages;

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
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
      <div
        className={`${
          isActiveEffectSlide ? "animate-slideIn" : "hidden"
        } flex flex-col w-[30%] h-[15%] min-w-[260px] min-h-[180px] bg-white rounded-xl shadow-2xl`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-800 via-blue-800 to-cyan-700 w-full text-white px-4 py-2 rounded-t-lg flex justify-between items-center shadow-md">
          <h2 className="font-semibold text-lg">Páginas</h2>
          <p
            onClick={toggleNavigator}
            className="cursor-pointer font-bold text-xl hover:text-red-400 transition-colors duration-300"
          >
            ✕
          </p>
        </div>

        {/* Contenedor scrollable */}
        <div className="flex flex-col py-6 px-6 gap-3 w-full items-center overflow-y-auto">
          {filteredPages.map((item, index) => {
            const commonClasses =
              "min-h-10 justify-center items-center gap-8 w-[80%] flex text-sm sm:text-lg px-4 py-2 rounded-lg font-bold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl";

            if (item.name === "Logout") {
              return (
                <div
                  key={index}
                  onClick={async (e) => {
                    e.preventDefault();
                    await logout();
                    toggleNavigator();
                    router.replace("/");
                  }}
                  className={`${commonClasses} bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-500 hover:to-red-400 cursor-pointer`}
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
                className={`${commonClasses} bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white hover:from-indigo-500 hover:via-blue-500 hover:to-cyan-400`}
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
