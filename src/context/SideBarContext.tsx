"use client";

import { createContext, useContext, useState,ReactNode  } from "react";

interface SideBarContextType {
    isOpen: boolean;
    contentData: ContentData|null;
    openSideBar: () => void;
    closeSideBar: () => void;
    sendDataForSideBar : ({}: ContentData)=> void
}

const SideBarContext  = createContext<SideBarContextType|null>(null)

type ContentData = {
    description: string;
    title : string
  };

export const SideBarProvider = ({children}: { children: ReactNode }) =>{
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [contentData, setContentData] = useState<ContentData|null>({description : "", title : ""})

    const openSideBar = ()=>setIsOpen(true)

    const sendDataForSideBar = (newData:ContentData)=>{
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
