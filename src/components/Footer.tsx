
import { FaFacebook, FaSquareInstagram } from "react-icons/fa6";

export default function Footer(){
    return (
        <div className="w-full bg-blue-500 text-white">
            <div className="h-[300px] container mx-auto grid grid-cols-3 p-8">
                <div className="flex flex-col gap-4 cursor-pointer">
                    <div className="flex gap-4">
                        <FaFacebook className="text-4xl "/>
                        <p className="text-2xl">Facebook</p>
                    </div>
                    <div className="flex gap-4 cursor-pointer">
                        <FaSquareInstagram className="text-4xl"/>
                        <p className="text-2xl">Instagram</p>
                    </div>
                </div>
            </div>
        </div>  
    )
}