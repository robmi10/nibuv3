import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
import React, {useContext, useEffect, useState} from 'react'
import Glitch from "../../../../effects/Glitch/Glitch"
import Product from "../../../Contentpages/Products/Product"
import {Parallax} from "react-parallax"
import eren2 from "../../../akirapages/img/eren2.png"
import TextEffect from '../../../../effects/TextEffect/texteffect'

const Productpage = () => {
const [render, setRender] = useState(false)
const [scrollPosition, setScrollPosition] = useState(false);

const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(true);
  };

/* useEffect(() => {
    //setRender(true)

    window.addEventListener("scroll", handleScroll);

    console.log("its rendered", scrollPosition)
    setScrollPosition(true)
    return () => {

        setScrollPosition(false)
    }
  }, [])  */

//   {window.pageYOffset >= 1200 && window.pageYOffset <= 1747 ?  <TextEffect text = {"↳ Product"}/> :<div></div>} 

return( 
                <div className="mask right illustration_01" id="productpage">
                    <div className="header_page">
                    {window.pageYOffset >= 1200 ?  <TextEffect text = {"↳ Product"}/> :<div></div>}
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
)
}

export default Productpage