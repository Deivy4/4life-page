"use client";

import Product from "@/components/Product";
import Banner from "../components/Banner";
import InfoProductUnique from "@/components/InfoProductUnique";
import VideoBanner from "@/components/VideoBanner";
import SideRightBar from "@/components/SideRightBar";
import Testimonio from "@/components/Testomonio";
import { usePaisContext } from "@/context/PaisContext";
import { useEffect, useState } from "react";
import { GetProducts } from "@/lib/Client4life";
import { Paises } from "@/lib/Enums";
import { Product4life } from "@/lib/Client4life";

export default function Home() {
  const [products, setProducts] = useState<Product4life[]>([]); // Estado para los productos
  const [isLoading, setIsLoading] = useState<boolean>(true); // Estado para los productos

  const { getCurrentPais } = usePaisContext();
  const pais = getCurrentPais();

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      const productsRes = await GetProducts({
        Pais: pais === "Colombia" ? Paises.Colombia : Paises.Argentina,
      });
      setProducts(productsRes);
      setIsLoading(false);
    };
    loadProducts();
  }, [pais]);
  useEffect(() => {
    const loadProducts = async () => {
      if (getCurrentPais() == "Colombia") {
        const productsCol = await GetProducts({ Pais: Paises.Colombia });
        setProducts(productsCol);
      } else {
        const productsArg = await GetProducts({ Pais: Paises.Argentina });
        setProducts(productsArg);
      }
      setIsLoading(false); // moverlo dentro del async
    };
    loadProducts();
  }, [getCurrentPais]);
  if (isLoading) {
    return (
      <div className="h-[100%] w-full">
        <img
          className="w-full h-svh object-contain max-h-[800px] md:max-h-none"
          src="./loading_Test.gif"
        ></img>
      </div>
    );
  }
  return (
    <>
      <SideRightBar />
      <div className="mt-14 flex flex-col justify-center items-center">
        <div className="sm:py-8 mt-2 bg-white rounded-lg shadow-md sm:flex-row flex-col flex justify-center w-full items-center text-white mx-auto gap-2">
          <Banner />
        </div>
        <div className="my-2 rounded-lg shadow-md bg-white sm:flex-row flex-col flex justify-center w-full items-center text-white mx-auto gap-2">
          <VideoBanner />
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
          <div className="flex flex-wrap justify-center">
            {products.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3"
                >
                  <Product
                    urlImage={item.urlImage}
                    name={item.name}
                    description={item.description}
                    urlProduct={item.urlProduct}
                    id={item.id}
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
