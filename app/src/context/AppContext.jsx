import { createContext, useRef, useState } from "react";

export const AppContext = createContext()

const regExp = /^\d+$/


function useDate()
{
    
    return {}
}

export function AppProvider({ children })
{
    const {} = useDate()

    return (
        <AppContext.Provider
         
        >
            {children}
        </AppContext.Provider>
    )
}