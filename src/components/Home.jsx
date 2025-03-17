import { useState } from "react";

import arrow from "../assets/svg/icons_arrow-up.svg";

import LineSectionButton from "./LineSectionButton";
import LineSectionContent from "./LineSectionContent";
import Project from "./Project";
import Technologies from "./Technologies";

import projectsJSON from "../projects.json";

const Home = () => {
  const [componentHover, setComponentHover] = useState("none");
  const [handleClick, setHandleClick] = useState("none");
  const [isAnimating, setIsAnimating] = useState(false);

  // Styles
  const buttonCarouselStyle =
    "cursor-pointer min-w-[40px] min-h-[40px] absolute z-40 flex justify-center items-center border-2 rounded-full bg-[#454545]";

  const projects = projectsJSON["projects"];

  const [renderProjectArray, setRenderProjectArray] = useState([
    projects.length - 2,
    projects.length - 1,
    0,
    1,
    2,
  ]);

  const handlePrevClickCarousel = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setRenderProjectArray((prevArray) => {
        const newArray = [...prevArray];

        newArray.pop();
        newArray.unshift(
          newArray[0] == 0 ? projects.length - 1 : newArray[0] - 1
        );
        return newArray;
      });

      setIsAnimating(false);
    }, 300);
  };

  const handleNextClickCarousel = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setRenderProjectArray((prevArray) => {
        const newArray = [...prevArray];

        newArray.shift();
        newArray.push(
          newArray[newArray.length - 1] == projects.length - 1
            ? 0
            : newArray[3] + 1
        );

        return newArray;
      });

      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="flex flex-1 flex-col justify-center items-center gap-4 box-border py-20">
      {/* *NOTE - About */}
      <LineSectionButton
        label="about"
        isActive={handleClick === "about"}
        otherActive={handleClick == "tech" || handleClick == "projects"}
        hover={componentHover == "about"}
        onActive={setHandleClick}
        onHover={setComponentHover}
        version="1"
      />

      {/* *NOTE - About - Hover component */}
      <LineSectionContent
        label="about"
        isActive={handleClick === "about"}
        onClose={setHandleClick}
        version="1"
      >
        <div className="flex flex-col gap-4 sm:p-4 md:p-10">
          <p className="text-base !font-light">
            I am{" "}
            <span className="text-cl-primary font-bold">
              Leonarda Saad {`:)`}
            </span>
          </p>
          <p className="text-base !font-light text-justify">
            I’m a Computer Science student, currently in the 6th semester, with
            focus on front-end development and growing interest in full-stack
            solutions. I constantly seek to improve my skills through courses in
            the area of programming and participation in academic projects and
            personal development, exploring good design practices and user
            experience.
          </p>
        </div>
      </LineSectionContent>

      {/**NOTE - Technologies */}
      <LineSectionButton
        label="tech"
        isActive={handleClick == "tech"}
        otherActive={handleClick == "about" || handleClick == "projects"}
        hover={componentHover == "tech"}
        onActive={setHandleClick}
        onHover={setComponentHover}
        version="2"
      />

      {/* *NOTE - Technologies - Hover component */}
      <LineSectionContent
        label="tech"
        isActive={handleClick === "tech"}
        onClose={setHandleClick}
        version="2"
        id="tech"
      >
        <div className="flex flex-col gap-6 sm:p-4">
          {/* Frontend */}
          <div className="flex flex-col gap-2">
            <p className="text-cl-primary text-md font-light">
              <span className="font-bold">{`>`}</span> frontend
            </p>

            <div className="flex gap-5 font-light text-base ml-2 flex-wrap md:ml-6">
              <Technologies name="react" label />
              <Technologies name="typescript" label />
              <Technologies name="javascript" label />
              <Technologies name="tailwindcss" label />
              <Technologies name="sass" label />
              <Technologies name="html" label />
              <Technologies name="css" label />
              <Technologies name="dart" label />
            </div>
          </div>

          {/* Backend */}
          <div className="flex flex-col gap-2">
            <p className="text-cl-primary text-md font-light">
              <span className="font-bold">{`>`}</span> backend
            </p>

            <div className="flex gap-5 font-light text-base ml-6 flex-wrap">
              <Technologies name="typescript" label />
              <Technologies name="javascript" label />
              <Technologies name="node" label />
              <Technologies name="vite" label />
              <Technologies name="postgresql" label />
              <Technologies name="mysql" label />
              <Technologies name="sqlite" label />
              <Technologies name="java" label />
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-2">
            <p className="text-cl-primary text-md font-light">
              <span className="font-bold">{`>`}</span> tools
            </p>

            <div className="flex gap-5 font-light text-base ml-6 flex-wrap">
              <Technologies name="vscode" label />
              <Technologies name="git" label />
              <Technologies name="npm" label />
              <Technologies name="figma" label />
            </div>
          </div>
        </div>
      </LineSectionContent>

      {/**NOTE - Projects */}
      <LineSectionButton
        label="projects"
        isActive={handleClick == "projects"}
        otherActive={handleClick == "about" || handleClick == "tech"}
        hover={componentHover == "projects"}
        onActive={setHandleClick}
        onHover={setComponentHover}
        version="2"
      />

      {/* *NOTE - Projects - Hover component */}
      <LineSectionContent
        label="projects"
        isActive={handleClick === "projects"}
        onClose={setHandleClick}
        version="2"
      >
        {/* Versão mobile */}
        <div className={`flex flex-col gap-6 items-center sm:hidden`}>
          <div className="relative flex justify-center overflow-hidden w-full">
            <div className="flex space-x-10 items-center">
              {renderProjectArray.map((e, i) => (
                <div
                  key={i}
                  className={`fade-slide ${!isAnimating ? "active" : ""} ${
                    i === Math.floor(renderProjectArray.length / 2)
                      ? "scale-100"
                      : "scale-90 opacity-70"
                  }`}
                >
                  <Project {...projects[e]} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-10">
            <button
              className="rounded-full border-1 border-cl-lightGray/60 cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
              onClick={handlePrevClickCarousel}
            >
              <img src={arrow} alt="seta" className="-rotate-135 size-6" />
            </button>
            <button
              className="rounded-full border-1 border-cl-lightGray/60 cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
              onClick={handleNextClickCarousel}
            >
              <img src={arrow} alt="seta" className="rotate-45 size-6" />
            </button>
          </div>
        </div>

        {/* Versão desktop */}
        <div className="hidden sm:flex xs:items-center xs:gap-8">
          <button
            className={`${buttonCarouselStyle}`}
            onClick={handlePrevClickCarousel}
          >
            <img src={arrow} alt="seta" className="-rotate-135 size-6" />
          </button>

          <div className="relative flex justify-center overflow-hidden w-full">
            <div className="flex space-x-10 items-center">
              {renderProjectArray.map((e, i) => (
                <div
                  key={i}
                  className={`fade-slide ${!isAnimating ? "active" : ""} ${
                    i === Math.floor(renderProjectArray.length / 2)
                      ? "scale-100"
                      : "scale-90 opacity-70"
                  }`}
                >
                  <Project {...projects[e]} />
                </div>
              ))}
            </div>
          </div>

          <button
            className={`${buttonCarouselStyle} right-0`}
            onClick={handleNextClickCarousel}
          >
            <img src={arrow} alt="seta" className="rotate-45 size-6" />
          </button>
        </div>
      </LineSectionContent>
    </div>
  );
};

export default Home;
