"use client";

import Product from "@/components/Product";
import Banner from "./Banner";
import BannerPromo from "./BannerPromo";
import InfoProductUnique from "@/components/InfoProductUnique";
import VideoBanner from "@/components/VideoBanner";
import Testimonio from "@/components/Testomonio";
import { useEffect, useState } from "react";
import { GetProducts } from "@/lib/Client4life";

export default function Home() {
  const [products, setProducts] = useState([]); // Estado para los productos
  const [isLoading, setIsLoading] = useState(true); // Estado para los productos

  useEffect(() => {
    const loadProducts = async () => {
      const productsCol = await GetProducts();
      setProducts(productsCol);
      setIsLoading(false); // moverlo dentro del async
    };
    loadProducts();
  }, []);
  if (isLoading) {
    return (
      <div className="h-[100vh] w-full flex items-center justify-center bg-gray-50">
        {/* Spinner animado con Tailwind */}
        <div className="w-24 h-24 border-4 border-t-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <>
      <div className="mt-14 flex flex-col justify-center items-center">
        <div className="sm:py-8 mt-2 bg-white rounded-lg shadow-md sm:flex-row flex-col flex justify-center w-full items-center text-white mx-auto gap-2">
          <Banner />
        </div>
        <div className="my-2 rounded-lg shadow-md bg-white sm:flex-row flex-col flex justify-center w-full items-center text-white mx-auto gap-2">
          <VideoBanner />
        </div>
        <div className="sm:py-8 mt-2 bg-white rounded-lg shadow-md sm:flex-row flex-col flex justify-center w-full items-center text-white mx-auto gap-2">
          <BannerPromo />
        </div>
        <div className="my-2 rounded-lg shadow-md bg-white sm:flex-row flex-col flex justify-center w-full items-center text-white mx-auto gap-2">
          <InfoProductUnique />
        </div>
        <h2
          id="seccion-products"
          className={`mt-3 text-4xl text-center text-blue-800 font-bold`}
        >
          Productos de 4life
        </h2>
        <div className="justify-center text-white container mb-4">
          <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 place-items-center">
            {products.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3"
                >
                  <Product
                    urlImage={item.urlImage}
                    name={item.title}
                    description={item.text}
                    urlProduct={item.urlComprar}
                    id={item.id}
                    price={item.precio}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Testimonio />
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
  );
}
