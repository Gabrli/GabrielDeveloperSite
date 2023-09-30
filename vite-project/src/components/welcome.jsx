import React from "react";
import "./styles/welcome.css";
import gr from './assets/iconic.svg'
import Title from "./title";
import { BsFillEnvelopeAtFill, BsFillTelephonePlusFill } from "react-icons/bs"
import { FaDiscord, FaInstagram } from 'react-icons/fa'

export default function WelcomeContainer() {
  return (
    <div className="main-main-grid">
      <div className="welcome-sections-box">
        <section id="first">
          {<Title />}
          <a href="https://www.instagram.com/reel/CtmcFHSgdq0/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank"><button><span>{<FaInstagram/>}</span></button></a>
          <a href="mailto: gabrys.wisniewski@op.pl"><button><span>{<BsFillEnvelopeAtFill/>}</span></button></a>
          <a href="tel:+48694638608"><button><span>{<BsFillTelephonePlusFill/>}</span></button></a>
          <a href=""><button><span>{<FaDiscord/>}</span></button></a>
          </section>
        <section id="second">
          <img id="icon" src={gr}/>
        </section>
      </div>

      
    </div>
  );
}
