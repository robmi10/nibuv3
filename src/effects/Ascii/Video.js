import React,{useEffect, useRef, useState} from 'react'
import video from "../../"

export default function Video(){
const video_new_ref =useRef(null)

return(
    <video ref={video_new_ref} autoPlay loop>
        <source src={video} type="video/mp4" />
    </video> 
)
}
