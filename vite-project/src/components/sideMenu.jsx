import React from "react";
import { FaGithub } from 'react-icons/fa';
export default function SideMenu(props){
    return(
        <>
        <div className={`side-menu-wrapper ${props.sideMenu ? 'active-menu' : ''}`}>
        
        <a href="https://github.com/Gabrli" target="_blank"><button className="nav-button-git-menu"><p><b>{<FaGithub/>}</b></p></button></a>
        <ul>
          <a href="#ab"><li><b>About </b></li></a>
          <a href="#fo"><li><b>Contact</b></li></a>
          <a href="#pro"><li><b>Projects</b></li></a>
        </ul>
        </div>
        </>
    )
}