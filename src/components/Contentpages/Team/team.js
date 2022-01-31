import React from 'react'
import "./Team.css"
import Ascii from '../../../effects/Ascii'
import "aos/dist/aos.css"
// import Aos from 'aos'
import { useMediaQuery } from 'react-responsive'
import Ascii_2 from '../../../effects/Ascii/ascii_2'
import Ascii_3 from '../../../effects/Ascii/ascii_3'
const Team = () => {
    
    const NormalScreen = useMediaQuery({ query: '(max-width: 1280px)' })

    return (
        <>
            <div>
                
            
            <div className ="container1">
             
            {NormalScreen ? <Ascii gif ={"https://media0.giphy.com/media/vETeJc11yHAas/giphy.gif"} width_input = {770} height_input = {500} /> :  null  }
           
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
             
         <div className ="container1Right" >
            
            <Ascii_2 gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {770} height_input = {500} /> 

            </div>

     {/*        <div className ="container1Right">
             
            {NormalScreen ? <Ascii gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {770} height_input = {500} /> : <Ascii gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {1450} height_input = {650} />  }
           
            </div>  */}
        </div>
 
        <div className="TeamContainer2Right">
        <div className ="TeamText" >
                    <div style = {{display: 'block'}}> MIKE JONES </div>

                    <div style = {{display: 'block'}}> CO-FOUNDER/CHIEF CREATIVE OFFICER </div>

                    <div style = {{display: 'block'}}> SCIENCE. FICTION. RULES. </div>
                </div>
        </div>   


        <div >
        <div className ="container1Middle" >
            
        <Ascii_3 gif ={"https://media2.giphy.com/media/LoBv5DaMSG74Zax14Q/giphy.gif?cid=ecf05e47dg614yg8yl2d3u7vp12cyma388zuqezkt63lqyim&rid=giphy.gif&ct=s"} width_input = {770} height_input = {500} />  

        </div>
    {/*     { window.scrollY > 7000 ? 
            <div className ="container1Middle" >
            
                {NormalScreen ? <Ascii gif ={"https://media2.giphy.com/media/LoBv5DaMSG74Zax14Q/giphy.gif?cid=ecf05e47dg614yg8yl2d3u7vp12cyma388zuqezkt63lqyim&rid=giphy.gif&ct=s"} width_input = {770} height_input = {500} /> : <Ascii gif ={"https://media2.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif"} width_input = {1450} height_input = {650} />  }
                
                </div> : null  }  */}
        </div>

        <div className="TeamContainer2Middle">
        <div className ="TeamText" >
                    <div style = {{display: 'block'}}> MIKE JONES </div>

                    <div style = {{display: 'block'}}> CO-FOUNDER/CHIEF CREATIVE OFFICER </div>

                    <div style = {{display: 'block'}}> SCIENCE. FICTION. RULES. </div>
                </div>
        </div> 

        


         <div >

         <div className ="container1MiddleRight" >
            
            {/* <Ascii gif ={"https://media0.giphy.com/media/EZICHGrSD5QEFCxMiC/giphy.gif?cid=ecf05e47440ee67eb53b3ed401e9013f1e243292e56cf779&rid=giphy.gif&ct=g"} width_input = {770} height_input = {500} /> 
     */}
            </div>
 
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
