import Image from "next/image"
export default function Product(
    {urlImage, title, contentText} : 
    {urlImage : string, title :string, contentText : string}){
    return (
        <div className=" bg-gradient-to-t from-[#606060] group text-white  cursor-pointer w-[320px] rounded p-2 py-4 hover:bg-black hover:bg-opacity-40">
            <div className="flex justify-center items-center">
                <Image style={{ position: 'relative', zIndex: 1 }} className="shadow-2xl relative group-hover:scale-105 transition-transform duration-300 ease-in-out transform rounded" src={urlImage} width={250} height={130} alt="product 4life"/>
            </div>
            <h2 className="mt-3 text-2xl text-center font-bold">{title}</h2>
            <p className="px-6 pb-6 pt-4 ">{contentText}</p>
            <button className="text-white mx-6 px-2 py-3 bg-black rounded">Comprar</button>
        </div>
    )
}