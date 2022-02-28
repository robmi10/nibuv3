import React,{useState} from 'react'
import "./Footnotes.css"
import Nibiru_black from "../../akirapages/img/Nibiru_Symbol2.svg"
import { useMediaQuery } from 'react-responsive'
import {Link} from 'react-scroll'

const Footnotes = () => {

    const [goToAbout, setGoToAbout] = useState(false)

    const [goTopProduct, setGoTopProduct] = useState(false)

    const [goToTwitter, setGoToTwitter] = useState(false)

    const [goToInstagram, setGoToInstagram] = useState(false)

    const [goToTeam, setGoToTeam] = useState(false)

    const [goToCareers, setGoToCareers] = useState(false)

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
                    <div style={{margin: "24px"}}>
                     <div style = {{display: 'block'}} className="FootnoteTextHeader">
                     FOLLOW US:
                     </div>

                    {goToTwitter ? <div onMouseLeave={() =>{setGoToTwitter(!goToTwitter)}} style = {{display: 'block'}} className="FootnoteText"
                    onClick={() =>window.open(`https://twitter.com/PlanetixO`)}>
                     ↳ TWITTER
                     </div>
                     : <div onMouseOver={() =>{setGoToTwitter(!goToTwitter)}} 
                        className="FootnoteText">→ TWITTER</div>}
 

                    {goToInstagram ? <div onMouseLeave={() =>{setGoToInstagram(!goToInstagram)}} style = {{display: 'block'}} className="FootnoteText"
                    onClick={() =>window.open(`https://www.instagram.com/planet_ix/`)}
                    >
                     ↳ INSTAGRAM
                     </div>
                     : <div onMouseOver={() =>{setGoToInstagram(!goToInstagram)}} className="FootnoteText">→ INSTAGRAM</div>}
  
                    </div>
            </div>

            <div className ="FootnoteContainter3">
                    <div style={{margin: "24px"}}>
                        
                    {goToAbout ? <div onMouseLeave={() =>{setGoToAbout(!goToAbout)}} style = {{display: 'block'}} className="FootnoteText">
                     <Link to="header" spy={true} smooth={true}>
                     ↳ HOME
                     </Link>
                     </div>
                     : <div onMouseOver={() =>{setGoToAbout(!goToAbout)}} className="FootnoteText">→ HOME</div>}

                    {goTopProduct ? <div onMouseLeave={() =>{setGoTopProduct(!goTopProduct)}} style = {{display: 'block'}} className="FootnoteText">
                     <Link to="header" spy={true} smooth={true}>
                     ↳ PRODUCTS
                     </Link>
                     </div>
                     : <div onMouseOver={() =>{setGoTopProduct(!goTopProduct)}} className="FootnoteText">→ PRODUCTS</div>}

                    {goToTeam ? <div onMouseLeave={() =>{setGoToTeam(!goToTeam)}} style = {{display: 'block'}} className="FootnoteText">
                     <Link to="header" spy={true} smooth={true}>
                     ↳ TEAMS
                     </Link>
                     </div>
                     : <div onMouseOver={() =>{setGoToTeam(!goToTeam)}} className="FootnoteText">→ TEAMS</div>}


                    {goToCareers ? <div onMouseLeave={() =>{setGoToCareers(!goToCareers)}} style = {{display: 'block'}} className="FootnoteText">
                     <Link to="header" spy={true} smooth={true}>
                     ↳ CAREERS
                     </Link>
                     </div>
                     : <div onMouseOver={() =>{setGoToCareers(!goToCareers)}} className="FootnoteText">→ CAREERS</div>}

                    
                    
                    </div>
            </div>


            <div className ="FootnoteContainter4">
                    <div className="FootnoteTextHeader" style={{margin: "24px"}}>
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
