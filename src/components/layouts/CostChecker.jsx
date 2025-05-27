import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { cost_check } from "../../assets";
import Button from "../ui/Button";

const CostChecker = () => {
  return (
    <div className="lg:h-dvh lg:max-h-[900px] grid relative grid-rows-[1fr_max-content] grid-cols-[1fr] bg-white min-[834px]:grid-rows-[auto] min-[834px]:grid-cols-[1fr_1fr]">
      <div className="relative">
        <img
          src={cost_check}
          className="absolute size-full inset-0 object-cover object-[center_top]"
          alt=""
        />
      </div>
      <div className="flex justify-start items-start flex-col h-auto w-fit m-auto gap-6 pt-4 pb-6 px-6 lg:gap-6 lg:max-w-[600px] lg:py-6 lg:px-8">
        <div className="flex gap-4 justify-start items-start flex-col w-auto h-auto">
          <span className="font-lora font-normal text-xl leading-[29px] text-left text-black lg:text-[37px] lg:leading-[42px]">
            what does it cost?
          </span>
          <p className="text-[13px] leading-[18px] text-black lg:text-lg lg:leading-[23px] min-[834px]:whitespace-pre-line">
            Costs based on ordering your own designs directly from Creator
            Studio, using direct to garment technique. All you need is an idea.
          </p>
        </div>
        <div className="flex justify-start items-start flex-col w-auto h-auto gap-6 min-[834px]:gap-4">
          <div className="flex justify-start items-start flex-col w-auto h-auto gap-4 min-[834px]:gap-8">
            <div className="flex justify-start items-start flex-col lg:flex-row w-auto h-auto gap-2 lg:gap-6">
              {[
                "Premium blanks",
                "Responsible production",
                "born from fashion",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 justify-start w-auto h-auto"
                >
                  <IoIosCheckmarkCircle className="size-[18px] min-w-[18px] min-h-[18px] text-black" />
                  <p className="text-[11px] leading-4 text-black lg:text-sm lg:leading-5 min-[834px]:whitespace-nowrap">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-4 justify-start items-start flex-col w-full h-auto">
              <div className="flex gap-4 justify-start items-start flex-col h-auto w-full">
                <div className="flex gap-2 justify-start items-start flex-col h-auto w-full">
                  {[
                    {
                      text: "Cost for one-t-shirt including print",
                      price: 10.99,
                    },
                    { text: "Delivery", price: 5.23 },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-start flex-row w-full h-auto"
                    >
                      <p className="text-[13px] leading-[18px] text-black lg:text-lg lg:leading-[23px] min-[834px]:whitespace-pre-line">
                        {item.text}
                      </p>
                      <p className="text-[13px] leading-[18px] text-black lg:text-lg lg:leading-[23px] min-[834px]:whitespace-pre-line">
                        €{item.price}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-start h-auto w-[calc(100%_+_32px)] -mx-4 bg-gray-100 rounded-lg flex-row justify-between lg:py-5 lg:px-4">
                  <p className="text-[13px] leading-[18px] text-black font-extrabold lg:text-lg lg:leading-[23px] min-[834px]:whitespace-pre-line">
                    You pay
                  </p>
                  <p className="text-[13px] leading-[18px] text-black font-extrabold lg:text-lg lg:leading-[23px] min-[834px]:whitespace-pre-line">
                    €16.22
                  </p>
                </div>
              </div>
              <p className="italic opacity-70 text-[11px] leading-4 text-black lg:text-sm lg:leading-5 min-[834px]:whitespace-pre-line">
                * Cost for a True Blanks Regular Tee with single print,
                excluding VAT. ** Delivery costs may vary depending on weight
                and destination. Fees per item decrease when ordering more than
                1 pc.
              </p>
            </div>
          </div>
        </div>
        <Button
          href="/"
          className="bg-black text-white hover:border-black hover:text-black hover:bg-transparent"
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

export default CostChecker;
