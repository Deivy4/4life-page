"use client";
import React from 'react'
import { useSidebar } from "@/context/SideBarContext";
export default function SideRightBar() {
    const { isOpen, closeSideBar, contentData} = useSidebar();
    console.log(contentData?.description);
  return (
    <>
    <div
      className={`p-4 fixed top-0 right-0 h-full w-[80%] md:w-[40%] z-40 bg-white shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } z-50`}
    >
      <article className='flex flex-col gap-8'>
        <h2 className='text-xl border-b-2'>{contentData?.name}</h2>
        <div className='gap-4 flex flex-col'>
          <p className=' px-2 py-1 rounded-sm bg-green-500'>Valor en dólares: {contentData?.priceDolars} </p>
          <p className=' px-2 py-1 rounded-sm bg-green-500'>Valor en pesos argentinos: {contentData?.priceArgentinos} </p>
          <p className=' px-2 py-1 rounded-sm bg-green-500'>Link de página oficial: </p>
        </div>
      </article>
    </div>
    {isOpen && (
      <div
      onClick={closeSideBar}
      className="fixed inset-0 bg-black bg-opacity-50 z-[9]"
      >
      </div>)}
    </>
  )
}
