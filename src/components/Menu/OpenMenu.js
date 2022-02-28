import React, {useState} from 'react'
import { NavbarContainer } from './MenuStyles'
import "./Menu.css"
import "./MenuOpen.css"
import { useContext } from "react";
import { Context } from '../Context/Context'
import {Link} from 'react-scroll'

const OpenMenu = () => {
    const {tooglemenu, setTooglemenu} = useContext(Context);
    const [goToAbout, setGoToAbout] = useState(false)
    const [goToProducts, setGoToProducts] = useState(false)
    const [goToDay, setGoToDay] = useState(false)
    const [goToTeam, setGoToTeam] = useState(false)
    const [goToCareers, setGoToCareers] = useState(false)
    const [goToPools, setGoToPools] = useState(false)
    const closeMenu = () =>{
        console.log("set toogle")
        setTooglemenu(false)
    }
    return (
        <>
        <div className="MenuOpencontainer2">
                    <div className="MenuOpencontainer">
                        <h1 className="MenuOpenFont"  style={{fontSize: "12px", color: "blue", top: 0 ,left: "12px", position: "absolute"}}>MENU</h1>          
                            <h1 className="MenuOpenFont" style={{fontSize: "12px", color: "blue", top: 0 ,right: 10, position: "absolute", cursor: "pointer"}} 
                            onClick={() => {
                                closeMenu(tooglemenu)
                            }}>[X]</h1>
                    <div className="MenuText">
                    <ul style={{listStyleType: "none"}}>
                            {goToAbout ? <li onMouseLeave={() =>{setGoToAbout(!goToAbout)}} className="MenuOpenFont2" ><Link to="header" spy={true} smooth={true}>↳ Go.to</Link></li>: <li onMouseOver={() =>{setGoToAbout(!goToAbout)}} className="MenuOpenFont2">↳ Home</li>}
                            {goToProducts ? <li onMouseLeave={() =>{setGoToProducts(!goToProducts)}} className="MenuOpenFont2"> <Link to="productpage" spy={true} smooth={true}> ↳ Go.to </Link></li>: <li onMouseOver={() =>{setGoToProducts(!goToProducts)}} className="MenuOpenFont2">↳ Products</li>}
                            {/* {goToDay ? <li onMouseLeave={() =>{setGoToDay(!goToDay)}} className="MenuOpenFont2" >↳ Go.to</li>: <li onMouseOver={() =>{setGoToDay(!goToDay)}} className="MenuOpenFont2">↳ A Day At Nibiru</li>} */}
                            {goToCareers ? <li onMouseLeave={() =>{setGoToCareers(!goToCareers)}} className="MenuOpenFont2"> <Link to="careerpage" spy={true} smooth={true}>↳ Go.to</Link></li>: <li onMouseOver={() =>{setGoToCareers(!goToCareers)}} className="MenuOpenFont2">↳ Careers</li>}
                            {goToTeam ? <li onMouseLeave={() =>{setGoToTeam(!goToTeam)}} className="MenuOpenFont2"><Link to="teampage" spy={true} smooth={true}> ↳ Go.to </Link></li>: <li onMouseOver={() =>{setGoToTeam(!goToTeam)}} className="MenuOpenFont2">↳ The Team</li>}
                            {/* {goToPools ? <li onMouseLeave={() =>{setGoToPools(!goToPools)}} className="MenuOpenFont2"><Link to="loop" spy={true} smooth={true}>↳ Go.to</Link></li>: <li onMouseOver={() =>{setGoToPools(!goToPools)}} className="MenuOpenFont2">↳ Be In The Loop</li>} */}
                        </ul>
                    </div>
                </div>
       </div>
            
        </>
    )
}

export default OpenMenu
