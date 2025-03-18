import i18next, { changeLanguage } from "i18next";

import { useTranslation } from "react-i18next";

const Header = () => {
  const lang = i18next.language;
  const { t } = useTranslation();

  return (
    <div className="fixed top-[2vh] left-[2vw] w-[96vw] text-end font-bold flex flex-col gap-2">
      <div className="w-full h-[0.2em] bg-cl-lightGray"></div>
      <div className="flex flex-row w-full justify-between">
        {lang == "pt" ? (
          <button className="w-8 cursor-pointer" onClick={() => changeLanguage("en")}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png" alt="Bandeira do Brasil" />
          </button>
        ) : (
          <button className="w-8 cursor-pointer" onClick={() => changeLanguage("pt")}>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png" alt="United State flag" />
          </button>
        )}
        <a href="/">Leonarda Saad</a>
      </div>
    </div>
  );
};

export default Header;
