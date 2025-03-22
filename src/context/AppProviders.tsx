import {SideBarProvider} from '@/context/SideBarContext'
import {PaisProvider} from '@/context/PaisContext'
import React, { ReactNode, FC} from 'react'

type typeAppProviders = {
    children : ReactNode
}

export const AppProviders : FC<typeAppProviders> = ({children})=>{
    return (
        <SideBarProvider>
            <PaisProvider>
            {children}
            </PaisProvider>
        </SideBarProvider>
    )
}