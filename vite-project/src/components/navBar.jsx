import React, { useState } from "react";
import "./styles/nav.css";
import { FaGithub, FaBars } from 'react-icons/fa';


export default function NavBar(props) {
  
  return (
    <>
      <div className="navigation">
        <button className="nav-button-git"><p><b>{<FaGithub/>}</b></p></button>
        <ul>
          <li><b>About </b></li>
          <li><b>Contact</b></li>
          <li><b>Projects</b></li>
        </ul>
        <button onClick={() => props.setSideMenu(!props.sideMenu)} className="btn-show-side-menu">{<FaBars/>}</button>
      </div>

     
    </>
  );
}
