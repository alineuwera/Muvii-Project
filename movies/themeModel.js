import React, {createContext, useState} from 'react';

export const changeIntoMode = createContext();
export const ProviderIntoMode = ({children}) =>{
    const [mode, setMode] = useState(false)
    const data = {
        name: "aline",
        password:"Aline@123love"
    }
    const changeMode = ()=>{
        setMode((first)=>!first)
    }
    return(
        <changeIntoMode.Provider value={{mode, changeMode}}>
            {children}
        </changeIntoMode.Provider>
    )
}