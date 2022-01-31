import { createContext } from "react";
import { useState } from "react";
export const Context = createContext();

export const ContextProvider = ({children}) =>{
    const [tooglemenu, setTooglemenu] = useState(false)

    return(
        <Context.Provider value ={{tooglemenu, setTooglemenu}}>
            {children}
        </Context.Provider>
    )
}