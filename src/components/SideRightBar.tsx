"use client";
import React from 'react'
import { useSidebar } from "@/context/SideBarContext";
export default function SideRightBar() {
    const { isOpen, closeSideBar} = useSidebar();
  return (
    <>
    <div
      className={`fixed top-0 right-0 h-full w-[80%] md:w-[40%] z-40 bg-white shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } z-50`}
    >
    </div>
    {isOpen && (
      <div
      onClick={closeSideBar}
      className="fixed inset-0 bg-black bg-opacity-50"
      >
        
      </div>)}
    </>
  )
}
