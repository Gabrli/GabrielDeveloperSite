import React from "react";
import "./styles/projects.css";

import projectOne from "./assets/polite1.png";
import projectTwo from "./assets/pro2.png";
import projectThree from "./assets/pro3.png";

export default function Projects() {
  const projectsImg = [
    { backgroundImage: `url(${projectOne})` },
    { backgroundImage: `url(${projectTwo})` },
    { backgroundImage: `url(${projectThree})` },
  ];

  const renderImage = projectsImg.map((img, index) => {
    return <div className="img-box" style={img} key={index}></div>;
  });

  return (
    <>
      <div id="pro" className="projects-header">
        <p>
          <b>My Projects</b>
        </p>
      </div>

      <div className="projects-wrapper">
        <div className="projects-box">
          <section className="multimedia-box">
            <header>
              <p>
                <b>Online Dictionary</b>
              </p>
            </header>

            {renderImage[1]}

            <div className="options-wrapper">
              <a target="_blank" href="https://github.com/Gabrli/Dictionary-app">
                <button>Repo</button>
              </a>
              <a target="_blank" href="https://gabrli.github.io/Dictionary-app/">
                <button>Live</button>
              </a>
            </div>
          </section>
          <section className="descryption-box">
            <header>
              <p>
                <b>README.MD</b>
              </p>
            </header>
            <section>
              <p className="project-descryption">
                Hi there ! This project is it my new dictionary app, where you can fast
                researching english words and informations about him ! While was creating the project I
                wanted practise my skils in React +  TypeScript, CSS3 and HTML5. So this
                app I showed my skils in connect with Backend, Api - data bases.
              </p>
            </section>
          </section>
        </div>
        <div className="projects-box">
          <section className="multimedia-box">
            <header>
              <p>
                <b>Polite Email Builder</b>
              </p>
            </header>
            {renderImage[0]}

            <div className="options-wrapper">
              <a
                target="_blank"
                href="https://github.com/Gabrli/PolitesEmailBuilder-new-version-2.0"
              >
                <button>Repo</button>
              </a>
              <a
                target="_blank"
                href="https://politesemailbuilder-new-version-20.gabrys564.repl.co/"
              >
                <button>Live</button>
              </a>
            </div>
          </section>
          <section className="descryption-box">
            <header>
              <p>
                <b>README.MD</b>
              </p>
            </header>
            <section>
              <p className="project-descryption">
                Hi there! This app is it email builder which help you in write
                email in English. While was creating the project I wanted
                practise my skils in the DOM Manipulation, useing vanilia
                JavaScript, HTML5 and CSS3. So this app I showed my skils in
                manipulations elements on website and creating interesting and
                interactive web app.
              </p>
            </section>
          </section>
        </div>
        <div className="projects-box">
          <section className="multimedia-box">
            <header>
              <p>
                <b>GOPR Karkonosze, sekcja kontaktowa</b>
              </p>
            </header>
            {renderImage[2]}
            <div className="options-wrapper">
              <a target="_blank" href="https://gopr.org/kontakt">
                <button>Live</button>
              </a>
            </div>
          </section>
          <section className="descryption-box">
            <header>
              <p>
                <b>README.MD</b>
              </p>
            </header>
            <section>
              <p className="project-descryption">
                Hi there ! This project is it my first serious project which was
                create for website GOPR - Karkonoska Grupa Ochotnicza Pogotowia
                Ratunkowego - Mountain rescue.My job was to work on the contact
                section.
              </p>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
