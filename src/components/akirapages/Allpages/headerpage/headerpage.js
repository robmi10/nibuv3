import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
import React, {useContext, useEffect} from 'react'
import Glitch from "../../../../effects/Glitch/Glitch"
import {Parallax} from "react-parallax"
import eren2 from "../../../akirapages/img/akira.jpg"
import "./header.css"
const Headerpage = () => {

return(
    
        <div className ="illustration_start" id="headerpage" id="header">
            { window.scrollY < 800 ? <Glitch/> : null } 
        </div>
 
)
}

export default Headerpage