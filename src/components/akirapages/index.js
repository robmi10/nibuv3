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
import Careers from "../Contentpages/Careers/Careers"

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const scrambleTexts = [
    'say what again',
]

const scrambleTexts2 = [
    'Makes sense ????',
    "or not?"
]

const scrambleTexts3 = [
'CONTEnT',
"conteNt"
]

const header1 = [
'NAVBaR',
"navbAr"
]

const productHeader = [
'↳ Products'
]

const Akirapages = () => {
     const {tooglemenu} = useContext(Context);
    // console.log("current window Y -->", window.scrollY)

    return (
        <>
        <div className="mask right illustration_start">
            { window.scrollY < 500 ? <Glitch/>: null  }
        </div>
              
        <div className = "navbar">
            {tooglemenu ? <div> <NavbarOpen/> <OpenMenu/> </div>:  <div> <Navbar/> <Menu/> </div>}
        </div>

        <div className="mask right illustration_01">
            <div className="header_page">
            <TextEffect text = {"↳ Product"}/>  
            
            </div>
            
            
            <div className ="HeaderContainerOut" >
                <div className ="HeaderContainerProduct">
                    <div className ="Headertext" > 
                        Etraris. Musupplinte, es bonstreni intilic ertilicae culin vissil taribusuliam num niam cla co et graciam inam in terente 
                        artem veror iptis bonsimei is me quamenduc opubliciam viverrac temus abem host opublis nonum dic ta or at
                        racertusa L. Simoliam ariu quod Catus, conticeris talegitia L. Bis foriocum menam ex mente prid rei pos iu consum
                        Do, erum tus conihicus, P. Mae tameisqui perra modiis, ses nos adhuium quam testem fora in te, C. Publictum acion 
                        Etrum firmilica; huissilibus verum, ditam es aticam movidiorae corbitum num es con deo con vit, es con Etrum adelien 
                        atillabem tra mus Ad fure audefec ierteat vid
                    </div>
                </div>
                </div>            
            <div >
                <Product/>
            </div>
            
        </div>


        <div className="mask right illustration_sumbit_cv">

        <div className="header_page">
            ↘ Careers 
        </div>

            <div className = "HeaderContainerOut" >
                    <div class ="HeaderContainerProduct" >
                        <div className ="Headertext" >
                            Etraris. Musupplinte, es bonstreni intilic ertilicae culin vissil taribusuliam num niam cla co et graciam inam in terente 
                            artem veror iptis bonsimei is me quamenduc opubliciam viverrac temus abem host opublis nonum dic ta or at
                            racertusa L. Simoliam ariu quod Catus, conticeris talegitia L. Bis foriocum menam ex mente prid rei pos iu consum
                            Do, erum tus conihicus, P. Mae tameisqui perra modiis, ses nos adhuium quam testem fora in te, C. Publictum acion 
                            Etrum firmilica; huissilibus verum, ditam es aticam movidiorae corbitum num es con deo con vit, es con Etrum adelien 
                            atillabem tra mus Ad fure audefec ierteat vid
                        </div>
                    </div>
            </div>

            <Careers/>
            <div style = {{position: "sticky", top: 500, left: 0, zIndex: 10}}>
                 {/*    <h1>Second content</h1>
                    <TextScramble
                    texts={scrambleTexts}
                    letterSpeed={5}
                    nextLetterSpeed={100}
                    pauseTime={1500}
                    /> */}
            </div>
        </div>
        <div className="mask left illustration_02">

        <TextScramble
                texts={scrambleTexts3}
                letterSpeed={5}
                nextLetterSpeed={100}
                pauseTime={1500}
                />

                <div style = {{position: "sticky", top: 800, left: 0, zIndex: 10}}>
                <h1>Second content</h1>
                <TextScramble
                texts={scrambleTexts}
                letterSpeed={5}
                nextLetterSpeed={100}
                pauseTime={1500}
                />
            </div>
  
        </div>

        

        <div className="mask right illustration_03">

        <div style = {{position: "sticky", top: 500, left: 0, zIndex: 10}}>
                <h1>Third content</h1>
                <TextScramble
                texts={scrambleTexts}
                letterSpeed={5}
                nextLetterSpeed={100}
                pauseTime={1500}
                />
        </div>
        
        
        </div>

        <div className="mask right illustration_04">
        <div className="header_page">
            ↘ Team 
            </div>

            <div className = "HeaderContainerProduct2" >
                    <div class ="HeaderContainerOut2" >
                        <div className ="Headertext" >
                            Etraris. Musupplinte, es bonstreni intilic ertilicae culin vissil taribusuliam num niam cla co et graciam inam in terente 
                            artem veror iptis bonsimei is me quamenduc opubliciam viverrac temus abem host opublis nonum dic ta or at
                            racertusa L. Simoliam ariu quod Catus, conticeris talegitia L. Bis foriocum menam ex mente prid rei pos iu consum
                            Do, erum tus conihicus, P. Mae tameisqui perra modiis, ses nos adhuium quam testem fora in te, C. Publictum acion 
                            Etrum firmilica; huissilibus verum, ditam es aticam movidiorae corbitum num es con deo con vit, es con Etrum adelien 
                            atillabem tra mus Ad fure audefec ierteat vid
                        </div>
                    </div>
            </div>

        <div style = {{position: "sticky", top: 500, left: 0, zIndex: 10}}>
                {/* <h1>Fourth content</h1> */}
            {/*     <TextScramble
                    texts={scrambleTexts}
                    letterSpeed={5}
                    nextLetterSpeed={100}
                    pauseTime={1500}
                /> */}
        </div>
            <div>

            {/* { window.scrollY > 7000 ? <Team/>: null  }   */}
                
            {/* <Team/> */}
                <Footnotes/>
            </div>

            
        </div>
    
        </>
    )
}

export default Akirapages
