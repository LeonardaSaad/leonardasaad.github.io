import circleFull from "../assets/svg/circle-full.svg";
import circleBorder from "../assets/svg/circle-border.svg";

const LineSectionButton = ({
  label,
  isActive,
  otherActive,
  hover,
  onActive,
  onHover,
  version,
}) => {
  const imgStyleClass = `opacity-10 w-[20vw] max-w-[130px] md:max-w-[150px] pointer-events-none ${
    hover ? "opacity-20" : otherActive ? "!opacity-5" : ""
  }`;

  return (
    <div
      className={` cursor-pointer`}
      onMouseEnter={() => onHover(label)}
      onMouseLeave={() => onHover("none")}
      onClick={() => onActive(label)}
    >
      {version == 1 ? (
        <div className="flex justify-center items-center">
          <div className="flex flex-row gap-6 select-none ">
            <div className="flex gap-1 md:gap-2">
              <div
                className={`w-full flex justify-center items-center ${
                  isActive ? "" : "justify-center items-center"
                }`}
              >
                <span
                  className={`font-bold absolute text-base mix-blend-luminosity md:text-xl hidden sm:flex `}
                >
                  {`> ${label}`}
                </span>
                <img className={imgStyleClass} src={circleFull} alt="" />
              </div>
              <img className={imgStyleClass} src={circleBorder} alt="" />
            </div>
            <div className="flex gap-1 md:gap-2">
              <img className={imgStyleClass} src={circleBorder} alt="" />
              <img className={imgStyleClass} src={circleFull} alt="" />
            </div>
          </div>
          <span className="font-bold text-lg absolute sm:hidden">{`> ${label}`}</span>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="flex flex-row gap-6 select-none">
            <div className="flex gap-1 md:gap-2">
              <div
                className={`w-full flex justify-center items-center ${
                  isActive ? "" : "justify-center items-center"
                }`}
              >
                <span
                  className={`font-bold absolute text-base mix-blend-luminosity md:text-xl hidden sm:flex `}
                >
                  {`> ${label}`}
                </span>
                <img className={imgStyleClass} src={circleFull} alt="" />
              </div>
              <img className={imgStyleClass} src={circleBorder} alt="" />
            </div>
            <div className="flex gap-1 md:gap-2">
              <img className={imgStyleClass} src={circleFull} alt="" />
              <img className={imgStyleClass} src={circleBorder} alt="" />
            </div>
          </div>
          <span className="font-bold text-lg absolute sm:hidden">{`> ${label}`}</span>
        </div>
      )}
    </div>
  );
};

export default LineSectionButton;
