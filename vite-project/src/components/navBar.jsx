import React from "react";
import "./styles/nav.css";
import { FaGithub, FaBars } from 'react-icons/fa';


export default function NavBar(props) {

  return (
    <>
      <div className={`navigation ${props.clientY > 1 ? 'nav-active' : ''}`}>
        <button className="nav-button-git"><p><b>{<FaGithub/>}</b></p></button>
        <ul>
          <a href="#ab"><li><b>About </b></li></a>
          <a href="#fo"><li><b>Contact</b></li></a>
          <a href="#pro"><li><b>Projects</b></li></a>
        </ul>
        <button onClick={() => props.setSideMenu(!props.sideMenu)} className="btn-show-side-menu">{<FaBars/>}</button>
      </div>

     
    </>
  );
}
