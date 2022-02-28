import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
import React, {useContext, useEffect} from 'react'
import Glitch from "../../../../effects/Glitch/Glitch"
import Product from "../../../Contentpages/Products/Product"
import TextEffect from "../../../../effects/TextEffect/texteffect"
import {Parallax} from "react-parallax"
import eren2 from "../../../akirapages/img/eren2.png"
import Footnotes from '../../../Contentpages/Footnotes/Footnotes'
import Team from '../../../Contentpages/Team/team'

const Teamcomp = () => {
return( 
                
        <div className="mask right illustration_04" id ="teampage">
        <div className="header_page">

        {window.pageYOffset >= 5770 ? <TextEffect text = {"↳ Team"}/> : <div> </div>} 
            </div>

            <div className = "HeaderContainerProduct2" >
                    <div className ="HeaderContainerOut2" >
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

            {/* {  window.scrollY > 7000 ? <Team/>: null   }  */}
                <Team/>
                <Footnotes/>
            </div>

            
        </div>
)
}

export default Teamcomp