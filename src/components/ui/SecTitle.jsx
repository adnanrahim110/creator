import React from "react";

const SecTitle = ({ title }) => {
  return (
    <div className="flex flex-col gap-4 py-10 mx-auto px-6 lg:px-20 lg:gap-6">
      <div className="flex gap-0 justify-start items-center flex-col flex-nowrap w-full h-auto">
        <h2 className="lowercase font-normal text-[34px] leading-[42px] text-left text-white lg:text-[75px] lg:leading-20">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SecTitle;
