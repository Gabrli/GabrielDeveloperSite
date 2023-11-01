import React, { useCallback } from "react";
import "../styles/bg.css";

import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function MainBG() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  return (
    <div className="bg-container">
      <Particles
        className="fixed inset-0 -z-10"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#111",
            },
          },
          fpsLimit: 50,
          //interactivity: {
         // events: {

          // onHover: {
           // enable: true,
        // mode: "repulse",
          // },
          //resize: true,
          //}
          //},

          modes: {
            push: {
              quantity: 5,
            },
            repulse: {
              distance: 500,
              duration: 1,
            },
          },

          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#ffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1800,
              },
              value: 70,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
