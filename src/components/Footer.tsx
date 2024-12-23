
import { FaFacebook, FaSquareInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Footer(){
    return (
        <div className="w-full bg-blue-500 text-white">
            <div className="h-[300px] container mx-auto grid grid-cols-3 p-8">
                <div className="flex flex-col gap-4 cursor-pointer">
                    <a target="_blank" href={"https://www.facebook.com/profile.php?id=61562064733978"} className="w-full flex gap-4 hover:text-black p-2 items-center">
                        <FaFacebook className="text-2xl "/>
                        <p className="text-[20px] w-full">Facebook</p>
                    </a>
                    <a className="flex  gap-4 cursor-pointer hover:text-black p-2 items-center">
                        <FaSquareInstagram className=" text-2xl"/>
                        <p className="text-[20px] w-full ">Instagram</p>
                    </a>
                    <a className="flex gap-4 cursor-pointer hover:text-black p-2 items-center">
                        <FaWhatsapp className=" text-2xl"/>
                        <p className="text-[20px] w-full ">Whatsapp</p>
                    </a>
                </div>
            </div>
        </div>  
    )
}