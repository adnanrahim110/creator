import React from "react";

const texts = [
  "+",
  "PREMIUM BLANKS",
  "+",
  "RESPONSIBLE PRODUCTION",
  "+",
  "NO MINIMUM ORDER QTY",
  "+",
  "FCS PAPER PACKAGING",
  "+",
  "DELIVER TO 200 MARKETS",
  "+",
  "VOLUME DISCOUNT",
  "+",
  "PREMIUM BLANKS",
  "+",
  "RESPONSIBLE PRODUCTION",
  "+",
  "NO MINIMUM ORDER QTY",
  "+",
  "FCS PAPER PACKAGING",
  "+",
  "DELIVER TO 200 MARKETS",
  "+",
  "VOLUME DISCOUNT",
];

const Brands = () => {
  return (
    <section className="lg:h-[130px] relative w-full h-20 grid grid-cols-[repeat(2,auto)] items-center bg-black overflow-hidden gap-2">
      {[...Array(2)].map((_, idx) => (
        <div
          key={idx}
          className="flex gap-0 justify-start items-start flex-row flex-nowrap w-auto h-auto animate-marquee"
        >
          <div className="flex gap-6 justify-start items-start flex-row flex-nowrap w-auto h-auto">
            {texts.map((text, index) => (
              <span
                key={index}
                className="text-[9px] leading-normal font-gothic font-normal text-left text-white whitespace-pre"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Brands;
