"use client";

import { createContext, useContext, useState,ReactNode  } from "react";
import { Product4life } from '@/lib/Client4life'

interface SideBarContextType {
    isOpen: boolean;
    contentData: Product4life|null;
    openSideBar: () => void;
    closeSideBar: () => void;
    sendDataForSideBar : ({}: Product4life)=> void
}

const SideBarContext  = createContext<SideBarContextType|null>(null)

export const SideBarProvider = ({children}: { children: ReactNode }) =>{
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [contentData, setContentData] = useState<Product4life|null>({})

    const openSideBar = ()=>setIsOpen(true)

    const sendDataForSideBar = (newData:Product4life)=>{
        setContentData(newData)
    }
    const closeSideBar = ()=> setIsOpen(false)

    const valuesContext: SideBarContextType ={
        isOpen,
        contentData,
        openSideBar,
        closeSideBar,
        sendDataForSideBar
    }

    return (
        <SideBarContext.Provider value={valuesContext}>
            {children}
        </SideBarContext.Provider>
    );
}

export const useSidebar = ():SideBarContextType => { 
    const context = useContext(SideBarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SideBarProvider");
    }
    return context;
};
