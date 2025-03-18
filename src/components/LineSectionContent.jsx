const LineSectionContent = ({
  label,
  isActive,
  onClose,
  children,
  version,
}) => {
  return (
    <div
      className={`w-[96%] md:w-[90%] lg:w-[70%] xl:w-[70%] 2xl:w-[52%] ${
        isActive ? "block absolute" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center ml-3">
        <span className="font-bold text-xl">{label}</span>
        <span
          className="font-bold text-2xl cursor-pointer block w-fit py-2 px-4 hover:opacity-80"
          onClick={() => onClose("none")}
        >
          x
        </span>
      </div>

      <div
        className={`relative border-2 border-cl-lightGray p-4 rounded-xl box-border flex justify-center items-center overflow-hidden bg-linear-310 from-gradient-black to-gradient-white`}
      >
        {/* Blur no fundo */}
        <div className="absolute inset-0 flex justify-center gap-6 blur-sm z-30 w-full h-full pointer-events-none backdrop-blur-lg"></div>

        {/* Texto por cima */}
        <div className="w-full h-full relative flex flex-col gap-4 z-40">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LineSectionContent;
