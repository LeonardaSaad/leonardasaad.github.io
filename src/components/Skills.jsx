import React, { Component } from 'react';
import Html from "../assets/svg/html5.svg";
import javascript from "../assets/svg/javascript.svg";
import css from "../assets/svg/css3.svg";
import git from "../assets/svg/git.svg";
import node from "../assets/svg/node-js.svg";
import react from "../assets/svg/react.svg"
import npm from "../assets/svg/npm.svg"
import Figma from "../assets/svg/figma.svg"
import vscode from "../assets/svg/visual-studio-code.svg"
import postgresql from "../assets/svg/postgresql.svg"
import mysql from "../assets/svg/mysql.svg"
import sass from "../assets/svg/sass.svg"
import bem from "../assets/svg/bem.svg"
import vite from "../assets/svg/vite.svg"
import styled from "../assets/svg/styled-components.svg"
import material from "../assets/svg/material-ui.svg"

export class Skills extends Component {
  render() {
    return (
      <div className='skills' id='skills'>
        <h2>Skills</h2>

        <div className="skills__content">
            <div className="skills__skill-blue">
                <img src={Html} alt="" />
                <p>HTML5</p>
            </div>
            <div className="skills__skill-black">
                <img src={javascript} alt="" />
                <p>JavaSript</p>
            </div>
            <div className="skills__skill-blue">
                <img src={css} alt="" />
                <p>CSS3</p>
            </div>
            <div className="skills__skill-black">
                <img src={git} alt="" />
                <p>Git</p>
            </div>
            <div className="skills__skill-blue">
                <img src={node} alt="" />
                <p>Node.js</p>
            </div>
            <div className="skills__skill-black">
                <img src={react} alt="" />
                <p>React.js</p>
            </div>
            <div className="skills__skill-blue">
                <img src={npm} alt="" />
                <p>npm</p>
            </div>
            <div className="skills__skill-black">
                <img src={Figma} alt="" />
                <p>Figma</p>
            </div>
            <div className="skills__skill-blue">
                <img src={vscode} alt="" />
                <p>Visual Studio Code</p>
            </div>
            <div className="skills__skill-black">
                <img src={postgresql} alt="" />
                <p>PostgreSQL</p>
            </div>
            <div className="skills__skill-blue">
                <img src={mysql} alt="" />
                <p>MySQL</p>
            </div>
            <div className="skills__skill-black">
                <img src={sass} alt="" />
                <p>Sass</p>
            </div>
            <div className="skills__skill-blue">
                <img src={bem} alt="" />
                <p>BEM</p>
            </div>
            <div className="skills__skill-black">
                <img src={vite} alt="" />
                <p>Vite</p>
            </div>
            <div className="skills__skill-blue styled">
                <img src={styled} alt="" />
                <p>Styled Component</p>
            </div>
            <div className="skills__skill-black">
                <img src={material} alt="" />
                <p>Material UI</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Skills