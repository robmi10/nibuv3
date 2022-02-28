/* import Akira from '../smoothscroll/akira'
import Akira2 from '../smoothscroll/akira2'
import Akira3 from '../smoothscroll/akira3.copy' */
/* import aski4 from "../akirapages/img/akira4.jpeg"
import eren from "../akirapages/img/eren.jpg"
import eren2 from "../akirapages/img/eren2.png" */
import "./Mask.css"
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
import React, {useContext, useEffect} from 'react'
import Menu from '../Menu/Menu' 
import OpenMenu from '../Menu/OpenMenu'
import { Context } from '../Context/Context'
import NavbarOpen from '../Navbar/NavbarOpen'
import Navbar from '../Navbar/index'
import Glitch from "../../effects/Glitch/Glitch"
import Product from "../Contentpages/Products/Product"
import Footnotes from "../Contentpages/Footnotes/Footnotes"
import Team from "../Contentpages/Team/team"
import TextEffect from "../../effects/TextEffect/texteffect"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import "aos/dist/aos.css"
import Aos from 'aos'
import {Parallax} from "react-parallax"
import Headerpage from "./Allpages/headerpage/headerpage"
import Productpage from "./Allpages/product/product"
import Career from "./Allpages/career/career"
import Nibu1 from "./Allpages/nibu1/nibu1"
import Nibu2 from "./Allpages/nibu2/nibu2"
import Nibu3 from "./Allpages/nibu3/nibu3"
import Teamcomp from "./Allpages/Team/teamcomponent"
import Loop from "./Allpages/loop/loop"
import { Coinmarketcap } from "../Contentpages/Data/coinmarketcap"
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const scrambleTexts = [
    'say what again',
]

const scrambleTexts2 = [
    'Makes sense ????',
    "or not?"
]

const header1 = [
'NAVBaR',
"navbAr"
]

const productHeader = [
'↳ Products'
]

const Akirapages = () => {
    //console.log("its rendered current position", window.pageYOffset)
     const {tooglemenu} = useContext(Context);
    // console.log("current window Y -->", window.scrollY)
    return (
        <>

        <div className = "navbar">
            {tooglemenu ? <div> <NavbarOpen/> <OpenMenu/> </div>:  <div> <Navbar/> <Menu/> </div>}
        </div>

        <Coinmarketcap/>

        <Headerpage/>
             {/* { window.scrollY < 500 ? : null } */}

        <Nibu1/>

        <Productpage/>

        <Nibu2/>

        <Career/>
        
        <Nibu3/>

        <Teamcomp/>
        </>
    )
}

export default Akirapages
