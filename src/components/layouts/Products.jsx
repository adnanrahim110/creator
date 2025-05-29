import React from "react";
import { Link } from "react-router-dom";
import { points } from "../../constants";

const Products = () => {
  return (
    <section className="flex items-start justify-start flex-col flex-nowrap w-auto h-auto bg-white gap-7 py-10 px-6 lg:p-20 lg:gap-[72px]">
      <div className="grid gap-y-8 grid-cols-1 min-[834px]:grid-cols-2 lg:gap-y-[72px] lg:gap-x-6">
        {points.map((point, idx) => (
          <div
            key={idx}
            className="w-full flex justify-start  items-start flex-col h-auto gap-5 lg:gap-10"
          >
            <div className="relative w-full aspect-[365/255]">
              <img
                src={point.img}
                alt={point.title}
                className="absolute inset-0 size-full"
              />
            </div>
            <div className="flex items-start justify-start flex-col w-auto h-auto gap-6 lg:gap-8">
              <div className="flex items-start justify-start flex-col w-auto h-auto gap-2 lg:gap-4">
                <h4 className="text-xl leading-[29px] text-black lg:text-[37px] lg:leading-[42px] m-0">
                  {point.title}
                </h4>
                <p className="text-[13px] leading-[18px] text-black lg:text-lg lg:leading-[23px] min-[834px]:whitespace-pre-line">
                  {point.text}
                </p>
              </div>
              <Link to={point.path} className="relative flex h-fit w-fit">
                <span className="text-[9px] leading-[13px] uppercase cursor-pointer text-black select-none pb-2 font-medium font-gothic before:absolute before:block before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-black before:transition-all before:duration-300 before:ease-linear after:absolute after:block after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black/40 hover:before:w-full">
                  {point.btn_text}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
