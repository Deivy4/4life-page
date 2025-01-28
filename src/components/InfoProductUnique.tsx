// components/Banner.tsx
import React from 'react';

const InfoProductUnique = () => {
    return (
        <div className="p-6 bg-center text-gray-700 flex justify-stretch items-center relative">
            <div className="flex items-center justify-stretch flex-col sm:flex-row pb-10 gap-4 sm:gap-0">
                <div className="w-[50%] h-[70%] flex justify-center pt-3">
                    <div className="flex-1"></div>
                    <img
                        alt="Productos 4Life"
                        className="w-[65%] min-w-[300px] max-w-96"
                        src={"/Glutamine_Prime_1000x1000-removebg-preview.png"}
                    />
                    <div className='w-30'></div>
                </div>
                <div className="w-[50%] sm:w-[50%] h-[50%] flex">
                    <div className="w-full sm:w-[80%] gap-6 flex flex-col">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ducimus recusandae natus aliquid, ipsum nihil vel expedita distinctio voluptatibus soluta fugiat obcaecati? Sint, magnam impedit recusandae earum excepturi nihil commodi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoProductUnique;
