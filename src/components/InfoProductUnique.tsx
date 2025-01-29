"use client"// components/Banner.tsx
import React from 'react';

const InfoProductUnique = () => {
    return (
        <div className="w-full max-w-[1600px] text-gray-700 flex justify-stretch items-center relative sm:my-10">
            <div className="flex items-center justify-stretch flex-row py-10 sm:pr-0 pr-8 gap-4 sm:gap-0 w-full">
                <div className="w-[45%] sm:w-[50%] h-[90%] flex justify-center pt-3 ">
                    <div className="flex-1"></div>
                    <img
                        alt="Productos 4Life"
                        className="w-[50%] min-w-[190px] sm:min-w-[400px] max-w-96"
                        src={"/Glutamine_Prime_1000x1000-removebg-preview.png"}
                    />
                    <div className='w-22'></div>
                </div>
                <div className="w-[50%] sm:w-[50%] h-[50%] flex">
                    <div className="w-full sm:w-[80%] gap-6 flex flex-col">
                        <p className='text-xs sm:text-xl text-center'>Complementa tu dieta y promueve el bienestar general de tu organismo con este suplemento dietario exclusivo de 4Life a base de L-Glutamina y otros aminoácidos que complementan tu dieta y promueven el bienestar de tu organismo</p>
                        <div className='w-full flex justify-center'>
                            <button onClick={()=>{window.open("https://colombia.4life.com/davidazul/product/glutamine-prime---colombia/3870", "_blank")}} className=" w-[50%] text-xs sm:text-xl min-w-[170px] bg-blue-800 text-white hover:bg-blue-700 px-3 py-1 rounded-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-blue-600"
                                >
                                Ver más información
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoProductUnique;
