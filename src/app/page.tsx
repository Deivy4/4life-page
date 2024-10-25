import Image from "next/image"
import Product from "@/components/Product"
import products from './data/products.json'
import { Playfair_Display } from 'next/font/google'
import Banner from '../components/Banner'
const fontTitle = Playfair_Display({subsets:['latin'], weight : "400"})
export default function Home() {
  return (
    <div className="mt-14 flex flex-col justify-center items-center">
      <div className="mt-2 sm:flex-row flex-col flex justify-center w-full items-center text-white mx-auto gap-2">
        <Banner/>
      </div>
      <h2 className={`${fontTitle.className} text-4xl my-8 text-white`}>Productos de 4life</h2>
      <div className="justify-center text-white container">
        <div className="w-[100%] flex flex-wrap gap-4  justify-center mb-8">
          {products.map((item, index)=>{
            return <Product key={index} urlImage={item.urlImage} title={item.title} contentText={item.text}/>
          })}
        </div>
      </div>
      {/* <h2 className="text-4xl my-8">Notas y reseñas</h2>
      <div className="bg-orange-500 justify-center text-white container">
        <div className="w-[100%] flex flex-wrap gap-4 items-center justify-center">
          {notes.map((item, index)=>{
            return <ItemNote contentText={item.text}/>
          })}
        </div>
      </div> */}
    </div>
  )
}
