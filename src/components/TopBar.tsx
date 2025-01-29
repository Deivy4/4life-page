"use client"
import { FaShieldVirus } from "react-icons/fa6";
import Link from 'next/link';
import { useState } from "react";
import PopupPaises from "@/components/PopupPaises"

export default function TopBar(){
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [paisActive, setPaisActive] = useState("Colombia");
    const togglePais = (newPais : string)=>{
        setPaisActive(newPais)
        setIsPopupVisible(false)
    }
    const togglePopup = ()=>{
        setIsPopupVisible(!isPopupVisible)
    }
    return(
        <div className="container mx-auto w-full justify-center items-center flex">
            <nav className=" fixed  top-0 z-50 flex w-full items-center justify-center bg-blue-800 px-2">
                <Link href={"/"} className="cursor-pointer py-3 flex items-center justify-center gap-4 min-w-44">
                    <FaShieldVirus className=" text-yellow-300 mb-1" style={{minHeight : "30px", maxHeight : "30px", maxWidth:'30px', minWidth:'30px'}}/>
                    <p className="text-white">4Life Protección inmunitaria</p>
                    <div className="w-8 md:hidden">
                        <img onClick={togglePopup} className=" cursor-pointer" src={`${paisActive == "Colombia" ? "/bandera-colombia.png" : "/bandera-argentina.png"}`} alt="" />
                    </div>
                </Link>
                <div className="w-0 sm:w-[25%] max-w-[500px]"></div>
                <div className="w-0 text-white sm:w-full flex justify-end max-w-[800px]">
                    <div className="w-8 mr-8">
                        <img onClick={togglePopup} className=" cursor-pointer" src={`${paisActive == "Colombia" ? "/bandera-colombia.png" : "/bandera-argentina.png"}`} alt="" />
                    </div>
                    {/* <Link href="/" className="cursor-pointer">Productos</Link>
                    <Link href="/quienes-somos" className="cursor-pointer">Quiénes somos</Link>
                    <Link href="/quiero-unirme-al-equipo" className="cursor-pointer">Quiero unirme al equipo</Link> */}
                </div>
            </nav>
            {isPopupVisible && (
                <PopupPaises togglePopup={togglePopup} togglePais={togglePais}/>
            )}
        </div> 
    );
}