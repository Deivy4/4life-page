import Product from "@/components/Product"
import products from './data/products.json'
import { Playfair_Display } from 'next/font/google'
import Banner from '../components/Banner'
import InfoProductUnique from '@/components/InfoProductUnique'
import VideoBanner from '@/components/VideoBanner'
import SideRightBar from '@/components/SideRightBar'
const fontTitle = Playfair_Display({subsets:['latin'], weight : "400"})

export default function Home() {
  return (
    <>
    <SideRightBar />
    <div className="mt-14 flex flex-col justify-center items-center">
      <div className="mt-2 bg-white rounded-lg shadow-md sm:flex-row flex-col flex justify-center w-full items-center text-white mx-auto gap-2">
        <Banner/>
      </div>
      <div className="my-2 rounded-lg shadow-md bg-white sm:flex-row flex-col flex justify-center w-full items-center text-white mx-auto gap-2">
        <InfoProductUnique/>
      </div>
      <div className="mt-2 mb-2 rounded-lg shadow-md bg-white sm:flex-row flex-col flex justify-center w-full items-center text-white mx-auto gap-2">
        <VideoBanner/>
      </div>
      <h2 id="seccion-products" className={`${fontTitle.className} text-4xl my-8 text-blue-800`}>Productos de 4life</h2>
      <div className="justify-center text-white container mb-4">
        <div className="flex flex-wrap justify-center">
          {products.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3">
                <Product
                  urlImage={item.urlImage}
                  title={item.title}
                  contentText={item.text}
                  urlComprar={item.urlComprar}
                />
              </div>
            );
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
  </>
  )
}
