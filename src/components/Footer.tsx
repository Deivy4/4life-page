"use client";
import { FaFacebook, FaSquareInstagram, FaWhatsapp } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { usePaisContext } from "@/context/PaisContext";

export default function Footer() {
  const { isColombia } = usePaisContext();
  const shared = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Protección inmunitaria",
        text: "¡Mira esta increíble página!",
        url: window.location.href,
      });
    }
  };
  return (
    <div className="w-full bg-blue-800 text-white">
      <div className="h-[300px] container mx-auto grid grid-cols-3 p-8">
        <div className="flex flex-col gap-4">
          <a
            target="_blank"
            href={"https://www.facebook.com/profile.php?id=61562064733978"}
            className=" flex gap-4 p-2 items-center w-min"
          >
            <FaFacebook className="text-2xl min-w-5 cursor-pointer" />
            <p className="text-[20px] w-full cursor-pointer">Facebook</p>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/davidazul.4life/"
            className="flex  gap-4  p-2 items-center w-min"
          >
            <FaSquareInstagram className=" min-w-5 text-2xl rounded bg-red-400 cursor-pointer" />
            <p className="text-[20px] w-full cursor-pointer">Instagram</p>
          </a>
          <a
            target="_blank"
            href={`${
              isColombia()
                ? "https://api.whatsapp.com/send?phone=+573041054830&text=%C2%A1Hola!%20%F0%9F%91%8B%20Estoy%20interesado(a)%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20de%204Life.%20%F0%9F%92%8A%E2%9C%A8%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20las%20opciones%20disponibles,%20beneficios%20y%20precios.%20%C2%BFMe%20podr%C3%ADas%20ayudar?%20%F0%9F%99%8F%20%C2%A1Gracias!"
                : "https://wa.link/q8qr69"
            }`}
            className="flex gap-4  p-2 items-center w-min"
          >
            <FaWhatsapp className=" text-2xl min-w-5 text-green-500 cursor-pointer" />
            <p className="text-[20px] w-full cursor-pointer">Whatsapp</p>
          </a>
          <a onClick={shared} className="flex gap-4  p-2 items-center w-min">
            <IoShareSocialSharp className=" cursor-pointer text-3xl min-w-7 rounded-full border-2 border-white p-1 text-white" />
            <p className="text-[20px] w-full cursor-pointer">Compartir</p>
          </a>
        </div>
        <div></div>
        <div className="flex items-end justify-end">
          <img
            className="max-w-96 w-full md:w-48 md:h-28"
            src="https://res.cloudinary.com/dt4pkrj5j/image/upload/v1738765035/photos/logo-afiliado-independiente-blanco_opvlwz.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
