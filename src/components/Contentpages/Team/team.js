import React from 'react'
import "./Team.css"
import Ascii from '../../../effects/Ascii'
import "aos/dist/aos.css"
// import Aos from 'aos'
import { useMediaQuery } from 'react-responsive'
/* import Ascii_2 from '../../../effects/Ascii/ascii_2'*/
import Ascii_3 from '../../../effects/Ascii/ascii_3' 
import vanclaude from "./Video/brainsprite.png"
import brain from "./Video/banana.png"
import carlton from "./Video/brainsprite.png"
import vandijk from "./Video/newvandam.webm"
import Ascii_new from '../../../effects/Ascii/ascii_new'


const Team = () => {
    
    const NormalScreen = useMediaQuery({ query: '(max-width: 1280px)' })
    const MediumScreen = useMediaQuery({ query: '(max-width: 820px)' })
    const MobileScreen = useMediaQuery({ query: '(max-width: 380px)' })

    return (
        <>
            <div>

            <div className ="container1">
             
            {MobileScreen ? <Ascii_new video ={vandijk} gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {350} height_input = {500} /> 
            : MediumScreen ? <Ascii_new video ={vandijk} gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {300} height_input = {400} /> 
            : NormalScreen ? <Ascii_new video ={vandijk} gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {770} height_input = {500} /> : null
              }
           
            </div> 

        </div>

        <div className="TeamContainer2">
        <div className ="TeamText" >
                    <div style = {{display: 'block'}}> MIKE JONES </div>
                    <div style = {{display: 'block'}}> CO-FOUNDER/CHIEF CREATIVE OFFICER </div>
                    <div style = {{display: 'block'}}> SCIENCE. FICTION. RULES. </div>
                </div>
        </div>


         <div >
             
        {/*  <div className ="container1Right" >
            
            <Ascii_2 gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {770} height_input = {500} /> 

            </div> */}

            <div className ="container1Right">
            {MobileScreen ? <Ascii_new video ={vandijk} gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {350} height_input = {500} /> 
            : MediumScreen ? <Ascii_new video ={vandijk} gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {300} height_input = {400} /> 
            : NormalScreen ? <Ascii_new video ={vandijk} gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {770} height_input = {500} /> : null
              }
            </div>  
        </div>
 
        <div className="TeamContainer2Right">
        <div className ="TeamText" >
                    <div style = {{display: 'block'}}> MIKE JONES </div>
                    <div style = {{display: 'block'}}> CO-FOUNDER/CHIEF CREATIVE OFFICER </div>
                    <div style = {{display: 'block'}}> SCIENCE. FICTION. RULES. </div>
                </div>
        </div>   

 
       <div className ="container1Middle" >
            
       {MobileScreen ? <Ascii_new video ={vandijk} gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {350} height_input = {500} /> 
            : MediumScreen ? <Ascii_new video ={vandijk} gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {300} height_input = {400} /> 
            : NormalScreen ? <Ascii_new video ={vandijk} gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {770} height_input = {500} /> : null
              }
        </div> 

        <div className="TeamContainer2Middle">
        <div className ="TeamText" >
                    <div style = {{display: 'block'}}> MIKE JONES </div>
                    <div style = {{display: 'block'}}> CO-FOUNDER/CHIEF CREATIVE OFFICER </div>
                    <div style = {{display: 'block'}}> SCIENCE. FICTION. RULES. </div>
                </div>
        </div>

       <div className ="container1MiddleRight" >      
       {MobileScreen ? <Ascii_new video ={vandijk} gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {350} height_input = {500} /> 
            : MediumScreen ? <Ascii_new video ={vandijk} gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {300} height_input = {400} /> 
            : NormalScreen ? <Ascii_new video ={vandijk} gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {770} height_input = {500} /> : null}

            </div> 
            <div className="TeamContainer2MiddleRight">
            <div className ="TeamText" >
                        <div style = {{display: 'block'}}> MIKE JONES </div>
                        <div style = {{display: 'block'}}> CO-FOUNDER/CHIEF CREATIVE OFFICER </div>
                        <div style = {{display: 'block'}}> SCIENCE. FICTION. RULES. </div>
                    </div>
            </div>      
         </>
    )
}

export default Team
