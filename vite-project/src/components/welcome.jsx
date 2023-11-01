import React from "react";
import "./styles/welcome.css";
import gr from './assets/iconic.svg'
import Title from "./title";
import MediaLinksList from "./contactComponents/mediaLinksList";

export default function WelcomeContainer() {
  return (
    <div className="main-main-grid">
      <div className="welcome-sections-box">
        <section id="first">
          <Title />
          <MediaLinksList/>
          </section>
        <section id="second">
          <img id="icon" src={gr}/>
        </section>
      </div>

      
    </div>
  );
}
