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
          <div className="buttons-wrapper">
          <button><a href="https://www.instagram.com/reel/CtmcFHSgdq0/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank">{<FaInstagram/>}</a></button>
          <button><a href="mailto: gabrys.wisniewski@op.pl">{<BsFillEnvelopeAtFill/>}</a></button>
          <button><a href="tel:+48694638608">{<BsFillTelephonePlusFill/>}</a></button>
          <a href=""><button><span>{<FaDiscord/>}</span></button></a>
          </div>
          </section>
        <section id="second">
          <img id="icon" src={gr}/>
        </section>
      </div>

      
    </div>
  );
}
