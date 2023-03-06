import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__line1"></div>
        <div className="footer__line2"></div>
        <div className="footer__content">
          <h1 className="footer__title">Bye! <span>👍</span></h1>
          <p className="footer__credits">Leonarda Saad, 2023</p>
        </div>
      </div>
    );
  }
}

export default Footer;
