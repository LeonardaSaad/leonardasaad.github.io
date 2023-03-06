import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__categorys">
          <Link to="/path#top" smooth className="header__category">
            <p>Home</p>
          </Link>
          <Link
            to="#skills"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            className="header__category"
          >
            <p>Skills</p>
          </Link>
          <Link
            to="#projects"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            className="header__category"
          >
            <p>Projetos</p>
          </Link>
          <Link
            to="#contacts"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            className="header__category"
          >
            <p>Contato</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
