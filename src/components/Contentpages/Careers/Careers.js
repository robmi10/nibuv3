import React from 'react'
import "./Careers.css"

const Careers = () => {
    return (
        <>
        <div className ="CareerContainerOut">
                <div className="CareerContainer">
                    <div className ="Careerdiv">
                        <div className ="Positiondiv">
                                <div className="TextPosition">
                                        POSITION
                                </div>

                                <div className="JobText" >
                                ↘ Onet etum aped ut lam, quidus eum
                                </div>
                        </div>

                        <div className ="Locationdiv">
                                <div className="TextPosition">
                                    LOCATION
                                </div>

                                <div className="JobText">
                                Stockholm
                                </div>
                        </div>

                        </div>

                        <div className ="Careerdiv2">

                            <div className ="Positiondiv">
                                <div className="TextPosition">
                                        DEPARTMENT
                                </div>

                                <div className="JobText">
                                    Marketing
                                </div>
                                
                            </div>

                            <div className ="Locationdiv">
                                <div className="TextPosition">
                                        DEADLINE 
                                </div>

                                <div className="JobText">
                                    01.12.2021
                                </div>
                            </div>  
                        </div>

                        <div className="SubmitButton">

                            <div className="TextSubmit">
                                SUBMIT YOUR CV
                            </div>

                        </div>
                </div> 
        </div>
        </>
    )
}

export default Careers
