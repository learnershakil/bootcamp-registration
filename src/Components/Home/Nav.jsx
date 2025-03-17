import wordmark from "../../assets/Logos/wordMarkWhite.png";

const Nav = ({ setPopUp }) => {
  const handleRegister = () => {
    setPopUp(true);
  };
  return (
    <div className="flex justify-between items-center px-[5vw] sm:py-[1vw] py-2 bg-gradient-to-r from-black/2 to-black/5 backdrop-blur-sm">
      <img
        src={wordmark}
        alt="Logo"
        className="sm:w-[15vw] w-[32vw] hover:opacity-90 transition-all"
      />

      <div className="flex items-center gap-6">
        <button
          onClick={handleRegister}
          className="sm:text-[1.5vw] text-[3.8vw] sm:border-2 border border-zinc-400 hover:border-white 
                    bg-gradient-to-r from-zinc-900 to-black hover:from-zinc-800 hover:to-zinc-900
                    sm:py-[0.5vw] py-[1vw] sm:px-[2vw] px-[4vw] rounded-full 
                    transition-all duration-300 hover:shadow-lg hover:scale-105
                    flex items-center justify-center font-medium tracking-wide"
        >
          <span>Join Us</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[1em] w-[1em] ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Nav;
