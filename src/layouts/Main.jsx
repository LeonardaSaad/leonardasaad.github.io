import React, { Component } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <Home className="home" id="home" />
        <About className="aboult" id="aboult"/>
        <Skills className="skills" id="skills"/>
        <Projects className="projects" id="projects"/>
        <Contact className="contact" id="contact"/>
      </div>
    )
  }
}

export default Main