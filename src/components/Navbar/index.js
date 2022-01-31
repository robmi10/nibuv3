import React from 'react'
import { NavbarContainer } from './NavbarStyles'
import "./Navbar.css"
import Nibirulogo from "../Images/Nibirulogo.svg"

const Navbar = () => {
    return (
        <>
    <div className="container">
            <img style={{position: 'absolute', left: -10,  width: "100px"}}src ={Nibirulogo}/>
       <div className="border br"></div>
     </div>
            
        </>
    )
}

export default Navbar
