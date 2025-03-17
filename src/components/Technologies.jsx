// const Technologies = ({img, imgAlt, bg}) => {
//   return (
//     <div className="flex-center gap-2">
//       <div className="size-9 flex justify-center items-center rounded-md" style={{background: bg}}>
//         <img className="h-5" src={img} alt={imgAlt} />
//       </div>
//     </div>
//   );
// };

import react from "../assets/svg/logo-react.svg";
import javascript from "../assets/svg/logo-javascript.svg";
import typescript from "../assets/svg/logo-typescript.svg";
import tailwindcss from "../assets/svg/logo-tailwindcss.svg";
import sass from "../assets/svg/logo-sass.svg";
import html from "../assets/svg/logo-html.svg";
import css from "../assets/svg/logo-css.svg";
import dart from "../assets/svg/logo-dart.svg";
import node from "../assets/svg/logo-node.svg";
import vite from "../assets/svg/logo-vite.svg";
import postgresql from "../assets/svg/logo-postgresql.svg";
import mysql from "../assets/svg/logo-mysql.svg";
import sqlite from "../assets/svg/logo-sqlite.svg";
import java from "../assets/svg/logo-java.svg";
import vscode from "../assets/svg/logo-vscode.svg";
import git from "../assets/svg/logo-git.svg";
import npm from "../assets/svg/logo-npm.svg";
import figma from "../assets/svg/logo-figma.svg";
import shadcnui from "../assets/svg/logo-shadcnui.svg";

const Technologies = ({ name, label }) => {
  const technologies = {
    react: { name: "React", img: react, imgAlt: "React logo", bg: "#61dafb15" },
    javascript: {
      name: "Javascript",
      img: javascript,
      imgAlt: "Javascript logo",
      bg: "#f0da4f15",
    },
    typescript: {
      name: "Typescript",
      img: typescript,
      imgAlt: "Typescript logo",
      bg: "#007ACC24",
    },
    tailwindcss: {
      name: "TailwindCSS",
      img: tailwindcss,
      imgAlt: "Tailwindcss logo",
      bg: "#61dafb15",
    },
    sass: { name: "Sass", img: sass, imgAlt: "Sass logo", bg: "#CF649A15" },
    html: { name: "HTML", img: html, imgAlt: "HTML logo", bg: "#DD4B2524" },
    css: { name: "CSS", img: css, imgAlt: "CSS logo", bg: "#264DE424" },
    dart: { name: "Dart", img: dart, imgAlt: "Dart logo", bg: "#23599724" },
    node: { name: "Node", img: node, imgAlt: "Node logo", bg: "#6FA66024" },
    vite: { name: "Vite", img: vite, imgAlt: "Vite logo", bg: "#9468FE24" },
    postgresql: {
      name: "PostgreSQL",
      img: postgresql,
      imgAlt: "PostgreSQL logo",
      bg: "#33679124",
    },
    mysql: { name: "MySQL", img: mysql, imgAlt: "MySQL logo", bg: "#97D9F614" },
    sqlite: {
      name: "SQLite",
      img: sqlite,
      imgAlt: "SQLite logo",
      bg: "#23599724",
    },
    java: { name: "Java", img: java, imgAlt: "Java logo", bg: "#11111124" },
    vscode: {
      name: "VS Code",
      img: vscode,
      imgAlt: "VS Code logo",
      bg: "#007ACC24",
    },
    git: { name: "Git", img: git, imgAlt: "Git logo", bg: "#F03C2E14" },
    npm: { name: "npm", img: npm, imgAlt: "npm logo", bg: "#CB383714" },
    figma: { name: "Figma", img: figma, imgAlt: "Figma logo", bg: "#11111124" },
    shadcnui: { name: "Shadcn-UI", img: shadcnui, imgAlt: "Shadcn-UI logo", bg: "#a8a8a823" },
  };

  if (!name || !technologies[name]) {
    return null;
  }

  const { name: techLabel, img, imgAlt, bg } = technologies[name];

  return (
    <div className="flex-center gap-2">
      <div
        className="size-9 flex justify-center items-center rounded-md"
        style={{ background: bg }}
      >
        <img className="h-5" src={img} alt={imgAlt} />
      </div>
      {label ? <span>{techLabel}</span> : ""}
    </div>
  );
};

export default Technologies;
