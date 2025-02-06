"use client"// components/Banner.tsx
import React from 'react';

const InfoProductUnique = () => {
    return (
        <div className="container w-full text-gray-700 flex justify-stretch items-center sm:my-10">
            <div className="flex items-center justify-stretch flex-row py-10 md:px-16 px-4 gap-4 sm:gap-0 w-full">
                <div className="w-[50%] sm:w-[70%] h-full flex">
                        <div className="w-full sm:w-[80%] gap-6 flex flex-col">
                            <p className='text-xs sm:text-xl text-center'>Complementa tu dieta y promueve el bienestar general de tu organismo con este suplemento dietario exclusivo de 4Life a base de L-Glutamina y otros aminoácidos que complementan tu dieta y promueven el bienestar de tu organismo</p>
                            <div className='w-full flex justify-center'>
                                <button onClick={()=>{window.open("https://colombia.4life.com/davidazul/product/glutamine-prime---colombia/3870", "_blank")}} className=" md:w-[50%] text-xs sm:text-xl min-w-[150px] md:min-w-[220px] bg-blue-800 text-white hover:bg-blue-700 px-3 py-1 rounded-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-blue-600"
                                    >
                                    Ver más información
                                </button>
                            </div>
                        </div>
                </div>
                <div className="w-[45%] sm:w-[50%] h-full flex justify-center pt-3 ">
                    <img
                        alt="Productos 4Life"
                        className="w-[90%] min-w-[165px] sm:min-w-[300px] md:min-w-[400px] rounded"
                        src={"https://media2.4life.com/products/Publicitaria_Glutamine_1000x1000.png?width=1000&mode=crop&quality=80"}
                    />
                </div>
            </div>
        </div>
    );
};

export default InfoProductUnique;
