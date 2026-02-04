"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Product(props) {
  const { name, description, urlImage, id } = props;

  const router = useRouter();
  const handleClick = () => {
    router.push(`/producto/${id}`);
  };

  return (
    <div
      className={`opacity-100 group w-[280px] rounded-xl p-4 bg-gradient-to-b from-white to-blue-50 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
    >
      <div className="flex justify-center items-center overflow-hidden rounded-xl">
        <Image
          style={{ position: "relative", zIndex: 1 }}
          className="relative group-hover:scale-105 transition-transform duration-300 ease-in-out transform rounded-xl max-w-[280px]"
          src={urlImage ?? ""}
          width={200}
          height={130}
          alt={name}
        />
      </div>
      <h2 className="mt-4 text-2xl text-center text-blue-900 font-extrabold">
        {name}
      </h2>
      <p className="text-base px-4 py-3 text-gray-700 text-justify">
        {description}
      </p>
      <button
        onClick={handleClick}
        className="w-full mt-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold py-2 rounded-lg hover:from-blue-600 hover:to-blue-400 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Comprar
      </button>
    </div>
  );
}
