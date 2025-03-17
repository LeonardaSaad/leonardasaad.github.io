import arrow from "../assets/svg/icons_arrow-up.svg";

import Technologies from "./Technologies";

const Project = ({ imgURL, imgAlt, link, label, content, technologies }) => {
  return (
    <div className="flex flex-col gap-4 w-[78vw] sm:w-[82vw] max-w-[450px]">
      <img className="h-22 rounded-lg w-fit" src={imgURL} alt={imgAlt} />
      <a
        className="flex-left-center gap-6 text-white font-bold cursor-pointer"
        href={link}
        target="_blank"
      >
        {label}
        <img src={arrow} alt="" />
      </a>
      <p className="text-base text-justify text-wrap ">{content}</p>
      <div className="flex-left-center gap-2">
        {(technologies || []).map((e, index) => (
          <Technologies key={index} name={e} />
        ))}
      </div>
    </div>
  );
};

export default Project;
