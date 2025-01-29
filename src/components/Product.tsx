"use client";

import Image from "next/image"
import { useSidebar } from "@/context/SideBarContext"
export default function Product(
    {urlImage, title, contentText, urlComprar} : 
    {urlImage : string, title :string, contentText : string, urlComprar : string}){

    const { openSideBar, closeSideBar, isOpen } = useSidebar()
    return (
        <div className={`${isOpen ? " opacity-50" : "opacity-100"} group text-blue-400  cursor-pointer w-[280px] rounded p-2 py-4 hover:bg-blue-700 hover:bg-opacity-40`}>
            <div className="flex justify-center items-center">
                <Image style={{ position: 'relative', zIndex: 1 }} className="relative group-hover:scale-105 transition-transform duration-300 ease-in-out transform rounded max-w-[280px]" src={urlImage} width={200} height={130} alt="product 4life"/>
            </div>
            <h2 className="mt-3 text-2xl text-center text-blue-800 font-bold">{title}</h2>
            <p className="px-6 pb-6 pt-4 text-black">{contentText}</p>
            {/* <button onClick={() => openSideBar({})} className="bg-blue-800 text-white hover:bg-blue-700 mx-6 px-3 py-2 rounded">Ver producto</button> */}
            <button onClick={() => window.open(urlComprar,"_blank")} className="bg-blue-800 text-white hover:bg-blue-700 mx-6 px-3 py-2 rounded">Comprar</button>
        </div>
    )
}