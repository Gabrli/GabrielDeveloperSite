import React from "react";
import { FaGithub } from "react-icons/fa";
import SideMenuLinksList from "./navigationComponents/navLinksList";

export default function SideMenu(props) {
  return (
    <>
      <div
        className={`side_menu_wrapper ${props.sideMenu ? "active_menu" : ""}`}
      >
        <a
          className="nav_button_git_menu"
          href="https://github.com/Gabrli"
          target="_blank"
        >
          <b>{<FaGithub />}</b>
        </a>

        <SideMenuLinksList />
      </div>
    </>
  );
}
