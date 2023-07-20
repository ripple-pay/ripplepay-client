// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, {useEffect, useState} from "react";


export const  AppContext = React.createContext();

export const ContextProvider = ({children}) =>{
    const [dashBoardConfig, setdashBoardConfig] = useState("users-home")
    
  
    return (
        <>
        <AppContext.Provider value={{
            dashBoardConfig,
            setdashBoardConfig
            
        }} >
            {children}
        </AppContext.Provider>
        </>
    )




}   