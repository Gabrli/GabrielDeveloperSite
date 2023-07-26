import React from "react";
import { FaGithub } from 'react-icons/fa';
export default function SideMenu(props){
    return(
        <>
        <div className={`side-menu-wrapper ${props.sideMenu ? 'active-menu' : ''}`}>
        
        <button className="nav-button-git-menu"><p><b>{<FaGithub/>}</b></p></button>
        <ul>
          <li><b>About </b></li>
          <li><b>Contact</b></li>
          <li><b>Projects</b></li>
        </ul>
        </div>
        </>
    )
}