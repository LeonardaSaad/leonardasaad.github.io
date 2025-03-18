const Footer = () => {
  return (
    <div className="fixed bottom-[2vh] left-[2vw] w-[96vw] flex flex-col gap-2">
      <div className="flex gap-5 font-bold text-base">
        <a href="https://github.com/LeonardaSaad" target="_blank">
          Github
        </a>
        <a href="https://www.linkedin.com/in/leonarda-saad/" target="_blank">
          LinkedIn
        </a>
        <a href="mailto:saad.leonarda@gmail.com" target="_blank">
          Mail
        </a>
      </div>
      <div className="w-full h-[0.2em] bg-cl-lightGray"></div>
    </div>
  );
};

export default Footer;
