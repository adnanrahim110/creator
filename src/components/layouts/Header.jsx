import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const commonClasses =
    "lg:text-[28px] lg:leading-7 relative decoration-0 text-white text-nowrap pb-2 font-normal text-xl leading-6 after:absolute after:block after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full";
  return (
    <>
      <header
        className={`absolute lg:pl-10 lg:pr-32 lg:top-8 top-0 left-0 pl-6 w-full h-14 grid grid-cols-2 items-center z-[100]`}
      >
        <Link to="/" className="w-[150px] lg:w-[230px] cursor-pointer">
          CREATOR STUDIO
        </Link>
        <div className="flex justify-between items-start w-auto h-auto">
          <div className="relative flex ml-11">
            <span className={`min-[834px]:cursor-default ${commonClasses}`}>
              Services
            </span>
          </div>
        </div>
      </header>
      <button
        className={`fixed z-[101] top-0 right-0 size-14 bg-white transition-all duration-300 lg:top-8 lg:right-10 cursor-pointer`}
      >
        <div className="absolute w-6 h-0.5 rounded-[1px] bg-black left-1/2 -translate-x-1/2 [transition:background_10ms_100ms] before:w-6 before:h-0.5 before:rounded-[1px] before:bg-black before:absolute before:-top-2 before:left-0 before:[transition:background_10ms_100ms,top_100ms_150ms_transform_100ms_50ms] after:absolute after:w-6 after:h-0.5 after:rounded-[1px] after:bg-black after:top-2 after:left-0 after:[transition:background_10ms_100ms,top_100ms_150ms_transform_100ms_50ms]" />
      </button>
    </>
  );
};

export default Header;
