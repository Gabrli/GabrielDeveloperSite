import React from "react";
import "./styles/projects.css";
import ProjectsList from "./projectsComponents/projectsList";


export default function Projects() {


  return (
    <>
      <div id="pro" className="projects-header">
        <p>
          <b>My Projects</b>
        </p>
      </div>

      <ProjectsList/>
    </>
  );
}
