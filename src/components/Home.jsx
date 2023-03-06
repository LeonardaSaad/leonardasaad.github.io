import React, { Component } from "react";
import computador from "../assets/img/computer.png";
// import TypeWriterEffect from "react-typewriter-effect";

export class Home extends Component {
  render() {
    return (
      <div className="home" id="home">
        {/* <div className="home__title">
          <h1>
            <TypeWriterEffect
              textStyle={{ fontFamily: "DM Sans" }}
              startDelay={100}
              cursorColor="transparent"
              text="Opa, seja"
              typeSpeed={80}
              hideCursorAfterText="false"
            />
          </h1>
          <h1>
            <TypeWriterEffect
              textStyle={{ fontFamily: "DM Sans" }}
              startDelay={1500}
              cursorColor="transparent"
              text="bem-vindo!"
              typeSpeed={80}
              hideCursorAfterText="false"
            />
          </h1>
          <h1>
            <TypeWriterEffect
              textStyle={{ fontFamily: "DM Sans" }}
              startDelay={3000}
              cursorColor="transparent"
              text="Eu me chamo"
              typeSpeed={80}
              hideCursorAfterText="false"
            />
          </h1>

          <h1 className="home__title-name">
            <TypeWriterEffect
              textStyle={{ fontFamily: "Athiti" }}
              startDelay={4200}
              cursorColor="transparent"
              text="Leonarda Saad :)"
              typeSpeed={80}
              hideCursorAfterText="false"
            />
          </h1>
        </div> */}

        <div className="home__columnAA">
          <div className="home__column2">
            <img src={computador} alt="Computador antigo." />
            <p className="home__sub-title">Dev front-end</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
