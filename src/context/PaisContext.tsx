"use client";

import { createContext, useContext, useState,ReactNode  } from "react";

interface PaisContextContextType {
    setCurrentPais: ({pais} : {pais:string}) => void;
    getCurrentPais: () => string;
}

const PaisContext  = createContext<PaisContextContextType|null>(null)

export const PaisProvider = ({children}: { children: ReactNode }) =>{
    const [currentPaisPage, setCurrentPaisPage] = useState<string>("Colombia")

    const setCurrentPais = ({pais} : {pais:string})=>{
        setCurrentPaisPage(pais)
    }

    const getCurrentPais = ()=> currentPaisPage

    const valuesContext: PaisContextContextType ={
        getCurrentPais,
        setCurrentPais
    }

    return (
        <PaisContext.Provider value={valuesContext}>
            {children}
        </PaisContext.Provider>
    );
}

export const usePaisContext = ():PaisContextContextType => { 
    const context = useContext(PaisContext);
    if (!context) {
        throw new Error("error in paiscontext");
    }
    return context;
};
