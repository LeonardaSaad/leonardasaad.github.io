import React, { Component } from "react";

import email from "../assets/svg/email.svg";
import linkedin from "../assets/svg/linkedin.svg";
import github from "../assets/svg/github.svg";
import twitter from "../assets/svg/twitter.svg";
import instagram from "../assets/svg/instagram.svg";

export class Contact extends Component {
  render() {
    return (
      <div className="contacts" id="contacts">
        <h2>Contact</h2>

        <div className="contacts__container">
          <a href="mailto:saad.leonarda@gmail.com" target="_blank">
            <div className="contacts__contact-blue">
              <img src={email} alt="" />
              <p>Email</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/leonarda-saad/" target="_blank">
            <div className="contacts__contact-black">
              <img src={linkedin} alt="" />
              <p>LinkedIn</p>
            </div>
          </a>
          <a href="https://github.com/LeonardaSaad" target="_blank">
            <div className="contacts__contact-blue">
              <img src={github} alt="" />
              <p>GitHub</p>
            </div>
          </a>
          <a href="https://twitter.com/Leonarda_Saad" target="_blank">
            <div className="contacts__contact-black">
              <img src={twitter} alt="" />
              <p>Twitter</p>
            </div>
          </a>
          <a href="https://www.instagram.com/leonarda_saad/" target="_blank">
            <div className="contacts__contact-blue">
              <img src={instagram} alt="" />
              <p>Instagram</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
