import React from "react";
import "./styles/bg.css";
import videoBG from './assets/bg.mp4'
export default function MainBG() {
  return (
    <div className="bg-container">
        <video src={videoBG} autoPlay muted loop class="video-bg"></video>
    </div>
  );
}
