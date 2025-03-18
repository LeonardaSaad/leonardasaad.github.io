import { useState } from "react";

import { useTranslation } from "react-i18next";

import arrow from "../assets/svg/icons_arrow-up.svg";

import LineSectionButton from "./LineSectionButton";
import LineSectionContent from "./LineSectionContent";
import Project from "./Project";
import Technologies from "./Technologies";

const Home = () => {
  const [componentHover, setComponentHover] = useState("none");
  const [handleClick, setHandleClick] = useState("none");
  const [isAnimating, setIsAnimating] = useState(false);

  // Translation using i18next
  const { t, i18n } = useTranslation();
  // Projects array
  const projects = t("projects.content", { returnObjects: true });

  // Styles
  const buttonCarouselStyle =
    "cursor-pointer min-w-[40px] min-h-[40px] absolute z-40 flex justify-center items-center border-2 rounded-full bg-[#454545]";

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
    <div className="flex flex-1 flex-col justify-center items-center h-screen gap-4 box-border py-20">
      {/* *NOTE - About */}
      <LineSectionButton
        label={t("about.title")}
        isActive={handleClick === t("about.title")}
        hover={componentHover == t("about.title")}
        onActive={setHandleClick}
        onHover={setComponentHover}
        version="1"
      />

      {/* *NOTE - About - Hover component */}
      <LineSectionContent
        label={t("about.title")}
        isActive={handleClick === `${t("about.title")}`}
        onClose={setHandleClick}
        version="1"
      >
        <div className="flex-column gap-10 sm:p-4 md:p-10">
          <div className="flex-column gap-4">
            <p className="text-base !font-light">
              {t("about.content.part1")}
              <span className="text-cl-primary font-bold">
                Leonarda Saad {`:)`}
              </span>
            </p>
            <p className="text-base !font-light text-justify">
              {t("about.content.part2")}
            </p>
          </div>

          <div className="flex gap-10 font-bold text-base text-cl-primary opacity-80">
            <a
              className="flex-center gap-2 "
              href="https://github.com/LeonardaSaad"
              target="_blank"
            >
              Github
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.48202 13.6171L11.2329 7.8662L11.6291 12.6185L13.1235 12.4944L12.5407 5.49775L5.54407 4.91491L5.41997 6.40938L10.1723 6.80554L4.42136 12.5564L5.48202 13.6171Z"
                  fill="#edb276"
                />
              </svg>
            </a>
            <a
              className="flex-center gap-2"
              href="https://www.linkedin.com/in/leonarda-saad/"
              target="_blank"
            >
              LinkedIn
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.48202 13.6171L11.2329 7.8662L11.6291 12.6185L13.1235 12.4944L12.5407 5.49775L5.54407 4.91491L5.41997 6.40938L10.1723 6.80554L4.42136 12.5564L5.48202 13.6171Z"
                  fill="#edb276"
                />
              </svg>
            </a>
            <a
              className="flex-center gap-2"
              href="mailto:saad.leonarda@gmail.com"
              target="_blank"
            >
              Mail
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.48202 13.6171L11.2329 7.8662L11.6291 12.6185L13.1235 12.4944L12.5407 5.49775L5.54407 4.91491L5.41997 6.40938L10.1723 6.80554L4.42136 12.5564L5.48202 13.6171Z"
                  fill="#edb276"
                />
              </svg>
            </a>
          </div>
        </div>
      </LineSectionContent>

      {/**NOTE - Technologies */}
      <LineSectionButton
        label={t("tech.title")}
        isActive={handleClick == t("tech.title")}
        hover={componentHover == t("tech.title")}
        onActive={setHandleClick}
        onHover={setComponentHover}
        version="2"
      />

      {/* *NOTE - Technologies - Hover component */}
      <LineSectionContent
        label={t("tech.title")}
        isActive={handleClick === t("tech.title")}
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
              <span className="font-bold">{`>`}</span> {t("tech.content.tools")}
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
        label={t("projects.title")}
        isActive={handleClick == t("projects.title")}
        hover={componentHover == t("projects.title")}
        onActive={setHandleClick}
        onHover={setComponentHover}
        version="2"
      />

      {/* *NOTE - Projects - Hover component */}
      <LineSectionContent
        label={t("projects.title")}
        isActive={handleClick === t("projects.title")}
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
