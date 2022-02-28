import React,{useState} from 'react'
import "./Careers.css"
import { CareerList } from './Careersdata'
import { Form } from './Form'
import Modal from 'react-modal';


const Careers = () => {
    const [showdialog, setShowdialog] = useState(false)
    return (
        <>
        <div className ="CareerContainerOut">
                <div className="CareerContainer">
                    <div className ="Careerdiv">
                        <div className ="Positiondiv">
                                <div className="TextPosition">
                                        POSITION
                                </div>
                                
                               
                                {CareerList.map((options) =>{
                                    return(
                                        <div className="JobText">
                                            ↘ {options.position}
                                            </div>
                                    )
                                })}

                                
                                
                        </div>

                        <div className ="Locationdiv">
                                <div className="TextPosition">
                                    LOCATION
                                </div>

                                {CareerList.map((options) =>{
                                    return(
                                        <div className="JobText">
                                            {options.location}
                                            </div>
                                    )
                                })}
                        </div>

                        </div>

                        <div className ="Careerdiv2">

                            <div className ="Positiondiv">
                                <div className="TextPosition">
                                        DEPARTMENT
                                </div>

                                {CareerList.map((options) =>{
                                    return(
                                        <div className="JobText">
                                            {options.department}
                                            </div>
                                    )
                                })}
                            </div>

                            <div className ="Locationdiv">
                                <div className="TextPosition">
                                        DEADLINE 
                                </div>
                                {CareerList.map((options) =>{
                                    return(
                                        <div className="JobText">
                                            {options.deadline}
                                            </div>
                                    )
                                })}
                            </div>  
                        </div>
                       

                        <button className="SubmitButton" onClick={() =>{setShowdialog(true)}}>
                            <div className="TextSubmit" >
                                SUBMIT YOUR CV
                            </div>
                        </button>
                </div> 
                
        </div>
        {showdialog ? 
                        <div className='CareerModal'> 
                            <div className='InputDialogdiv'>
                                <div className='InputDialogdiv2'> 
                                    <Form/>
                                    <button className='buttoninput' onClick={() =>{setShowdialog(false)}} style={{top: 0, right: 10} }>[X]</button>
                                    <button className='buttoninput' style={{position: "absolute", right: 10} }>Submit</button>
                                </div>
                            </div>
                        </div>
                            : 
                         null
                        }
        </>
    )
}

export default Careers
