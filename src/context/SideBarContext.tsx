"use client";

import { createContext, useContext, useState,ReactNode  } from "react";

interface SideBarContextType {
    isOpen: boolean;
    contentData: {}|null;
    openSideBar: ({}) => void;
    closeSideBar: () => void;
}

const SideBarContext  = createContext<SideBarContextType|null>(null)

export const SideBarProvider = ({children}: { children: ReactNode }) =>{
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [contentData, setContentData] = useState<{}|null>(null)

    const openSideBar = (newData:{})=>{
        setContentData(newData)
        setIsOpen(true)
    }

    const closeSideBar = ()=> setIsOpen(false)

    const valuesContext: SideBarContextType ={
        isOpen,
        contentData,
        openSideBar,
        closeSideBar
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
