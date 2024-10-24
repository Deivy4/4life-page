import { FaShieldVirus } from "react-icons/fa6";
import Link from 'next/link';

export default function TopBar(){
    return(
        <div className="container mx-auto w-full justify-center items-center flex">
            <nav className="fixed top-0 z-50 flex w-full items-center justify-center bg-blue-500 px-2">
                <Link href={"/"} className="cursor-pointer py-1 flex items-center justify-center gap-4 min-w-44">
                    <FaShieldVirus className=" text-yellow-300 mb-1" style={{minHeight : "30px", maxHeight : "30px", maxWidth:'30px', minWidth:'30px'}}/>
                    <p className="text-white">4Life Protección inmunitaria</p>
                </Link>
                <div className="w-0 sm:w-[25%] max-w-[500px]"></div>
                <div className="w-0 text-white sm:w-full flex justify-evenly max-w-[800px]">
                    {/* <Link href="/" className="cursor-pointer">Productos</Link>
                    <Link href="/quienes-somos" className="cursor-pointer">Quiénes somos</Link>
                    <Link href="/quiero-unirme-al-equipo" className="cursor-pointer">Quiero unirme al equipo</Link> */}
                </div>
            </nav>
        </div> 
    );
}