"use client";

import Image from "next/image";
import { useSidebar } from "@/context/SideBarContext";
import { useAfiliados } from "@/context/AfiliadosContext";
import { usePaisContext } from "@/context/PaisContext";
import { useCart } from "react-use-cart";

export default function Product(props) {
  const { urlProduct, id, name, description, urlImage, price } = props;
  const { GetAfiliado } = useAfiliados();
  const { addItem } = useCart();
  const { openSideBar, sendDataForSideBar, isOpen } = useSidebar();
  const { isColombia, isArgentina } = usePaisContext();

  const handleClick = () => {
    if (isColombia()) {
      const urlProductStoreAfiliado = urlProduct.replace(
        "$$codigoAfiliado$$",
        GetAfiliado().numeroAfiliado
      );
      window.open(urlProductStoreAfiliado, "_blank");
      return;
    }
    if (isArgentina()) {
      addItem({ id: id, name: name, price: price, urlImage });
      openSideBar();
      sendDataForSideBar(props); // envia toda la info del producto
    }
  };

  return (
    <div
      className={`${
        isOpen ? "opacity-50" : "opacity-100"
      } group text-blue-400 cursor-pointer w-[280px] rounded p-2 py-4 hover:bg-blue-700 hover:bg-opacity-40`}
    >
      <div className="flex justify-center items-center">
        <Image
          style={{ position: "relative", zIndex: 1 }}
          className="relative group-hover:scale-105 transition-transform duration-300 ease-in-out transform rounded max-w-[280px]"
          src={urlImage ?? ""}
          width={200}
          height={130}
          alt={name}
        />
      </div>
      <h2 className="mt-3 text-2xl text-center text-blue-800 font-bold">
        {name}
      </h2>
      <p className="text-lg px-6 pb-6 pt-4 text-black text-justify">
        {description}
      </p>
      <button
        onClick={handleClick}
        className="bg-blue-800 text-white hover:bg-blue-700 mx-6 px-3 py-2 rounded"
      >
        Comprar
      </button>
    </div>
  );
}
