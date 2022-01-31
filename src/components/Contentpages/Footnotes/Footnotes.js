import React from 'react'
import "./Footnotes.css"
import Nibiru_black from "../../akirapages/img/Nibiru_Symbol2.svg"
import { useMediaQuery } from 'react-responsive'

const Footnotes = () => {

    const isMobile = useMediaQuery({ query: '(min-width: 380px)' })
    if(isMobile){
        
    return (
        <>
            <div className ="FootnoteContainter">
                    <div className="FootnoteLogo">
                        <img style ={{width: 50, height: 50}} src={Nibiru_black}></img>
                    </div>
            </div>

            <div className ="FootnoteContainter2">
                    <div className="FootnoteText" style={{margin: "24px"}}>
                     <div style = {{display: 'block'}}>
                     FOLLOW US:
                     </div>
                     <div style = {{display: 'block'}}>
                     → TWITTER
                     </div>
                     <div style = {{display: 'block'}}>
                     → INSTAGRAM
                     </div>
                    
                    
                    </div>
            </div>

            <div className ="FootnoteContainter3">
                    <div className="FootnoteText" style={{margin: "24px"}}>
                     <div style = {{display: 'block'}}>
                     ↳ HOME
                     </div>
                     <div style = {{display: 'block'}}>
                     ↳ ABOUT
                     </div>
                     <div style = {{display: 'block'}}>
                     ↳ PRODUCTS
                     </div>
                     <div style = {{display: 'block'}}>
                     ↳ TEAMS
                     </div>
                     <div style = {{display: 'block'}}>
                     ↳ CAREERS
                     </div>
                    
                    
                    </div>
            </div>


            <div className ="FootnoteContainter4">
                    <div className="FootnoteText" style={{margin: "24px"}}>
                     <div style = {{display: 'block'}}>
                     NIBIRU SOFTWARE
                     </div>
                     <div style = {{display: 'block'}}>
                     © 2021 ALL RIGHTS RESERVED
                     </div>                
                    </div>
            </div>
        </>
    )

    }
    else{
        return(
            <>

        <div className ="FootnoteContainter">
            <div className="FootnoteText" >
                ↘ FOLLOW US
                </div>
            </div>

            <div className ="FootnoteContainter2">
                <div className="FootnoteText" >
                    ↘ STAY IN THE KNOW
                    </div>
            </div>

            <div className ="FootnoteContainter3">
                <div className="FootnoteText" >
                    ↘ SITE MAP
                    </div>
            </div>


            <div className ="FootnoteContainter4">
                    <div className="FootnoteText">
                        NIBIRU SOFTWARE © 2021 ALL RIGHTS RESERVED
                    </div>
            </div>
        </>

        )
    }
    
}

export default Footnotes
