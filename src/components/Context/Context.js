import { createContext } from "react";
import { useState } from "react";
export const Context = createContext();

export const ContextProvider = ({children}) =>{
    const [tooglemenu, setTooglemenu] = useState(false)
    const [ixtprice, setIxtprice] = useState(0)

    return(
        <Context.Provider value ={{tooglemenu, setTooglemenu, ixtprice, setIxtprice}}>
            {children}
        </Context.Provider>
    )
}