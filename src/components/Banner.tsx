// components/Banner.tsx
import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            <video
                src={"/stock-footage-abstract-animation-of-falling-diamonds-in-slow-motion-on-a-black-background-d-vertical-video.webm"}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/path/to/your/video.mp4" type="video/mp4" />
                Tu navegador no soporta videos.
            </video>
            <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50">
                <div className='flex flex-col items-between'>
                    <h1 className="text-3xl font-bold">4life afiliados independientes</h1>
                    <div className='w-full flex justify-start items-start'>
                        <button className="w-[40%] text-black  px-2 py-2 bg-white rounded">Comprar productos</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
