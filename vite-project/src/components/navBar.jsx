import React from "react";
import "./styles/nav.css";
import { FaGithub, FaBars } from 'react-icons/fa';
import NavbuttonToggle from "./navigationComponents/navButtonToggle";
import SideMenuLinksList from "./navigationComponents/navLinksList";
export default function NavBar(props) {

  return (
    <>
      <div className={`navigation ${props.clientY > 1 ? 'nav_active' : ''}`}>
        <a href="" className="nav_button_git">{<FaGithub/>}</a>
        
        <SideMenuLinksList/>
        <NavbuttonToggle onClick={() => props.setSideMenu(!props.sideMenu)} content={<FaBars/>}/>
      </div>

     
    </>
  );
}
