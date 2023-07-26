import React from "react";

export default function SideMenu(props) {
  return (
    <div className="side-menu">
      <button className="nav-button-git">
        <p>
          <b>{<FaGithub />}</b>
        </p>
      </button>
      <ul>
        <li>
          <b>About </b>
        </li>
        <li>
          <b>Contact</b>
        </li>
        <li>
          <b>Projects</b>
        </li>
      </ul>
    </div>
  );
}
