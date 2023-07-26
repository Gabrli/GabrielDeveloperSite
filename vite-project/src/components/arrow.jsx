import React from "react";
import {FaArrowDown} from 'react-icons/fa'

export default function Arrow(){
    return(
        <div className="arrow-container">
            <a href="#"><button>{<FaArrowDown/>}</button></a>
        </div>
    )
}