import React from "react";
import "./styles/welcome.css";
import gr from './assets/gr.svg'
import Title from "./title";

export default function WelcomeContainer() {
  return (
    <div className="main-main-grid">
      <div className="welcome-sections-box">
        <section>{<Title />}</section>
        <section>
          <img id="icon" src={gr}/>
        </section>
      </div>
    </div>
  );
}
