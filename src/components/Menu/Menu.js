import React from 'react'
import "./Menu.css"
import "./MenuOpen.css"
import { useContext } from "react";
import { Context } from '../Context/Context'


const MenuClosed = () => {

    const {tooglemenu, setTooglemenu} = useContext(Context);
    const openMenu = () =>{
        console.log("set toogle")
        setTooglemenu(true)
    }

    return (
        <>
        <div className="Menucontainer" style={{cursor:"pointer"}} onClick={() => {openMenu()}}>
                <h1 className="MenuFont MenuStyle">MENU</h1>
            
        </div> 
            
        </>
    )
}

export default MenuClosed
