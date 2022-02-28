import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
import React, {useContext, useEffect} from 'react'
import Glitch from "../../../../effects/Glitch/Glitch"
import Product from "../../../Contentpages/Products/Product"
import TextEffect from "../../../../effects/TextEffect/texteffect"
import {Parallax} from "react-parallax"
import Careers from "../../../Contentpages/Careers/Careers"
import eren2 from "../../../akirapages/img/akira.jpg"

const Career = () => {
return(
    
    <div className="mask right illustration_sumbit_cv" id="careerpage"> 
        <div className="header_page">
         {window.pageYOffset >= 4177 && window.pageYOffset ? <TextEffect text = {"↳ Careers"}/> : <div> </div>}
        </div>
            <div className = "HeaderContainerOut" >
                    <div className ="HeaderContainerProduct" >
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
        </div>

              
)
}

export default Career