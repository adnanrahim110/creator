import React from "react";
import { home_hero } from "../../assets";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="w-full h-svh relative aspect-auto">
      <div className="relative w-full h-full">
        <div className="lg:left-[104px] lg:w-[calc(100%_-_152px)] lg:bottom-[calc(-16px_+_20vh)] absolute left-6 z-[1] w-[calc(100%_-_48px)] flex justify-start items-start flex-col h-auto">
          <div className="lg:w-full lg:bottom-[72px] min-[834px]:w-full min-[834px]:bottom-32 absolute left-0 bottom-[72px] max-w-[calc(100%_-_48px)]">
            <h1 className="lg:w-[55vw] lg:text-[min(20vh,max(70px,11vw))] lg:leading-[min(20vh,max(74px,11vw))] w-[81vw] text-[max(70px,17vw)] leading-[max(74px,17vw)] select-none lowercase font-normal -tracking-[2px] text-white text-balance">
              create next level merch
            </h1>
          </div>
          <div className="grid min-[834px]:grid-cols-[max-content_1fr_max-content] w-full gap-8 items-center grid-cols-2">
            <Button href="/signIn">sign up now</Button>
          </div>
        </div>
        <div className="absolute left-1/2 z-[2] pb-4 flex-row gap-2 flex justify-start items-start w-auto h-auto lg:bottom-[calc(-16px_+_20vh)] lg:pb-6">
          <div className="bg-white w-2.5 h-2.5 rounded-full transition-opacity duration-500" />
        </div>
        <div className="flex h-auto absolute flex-row justify-between items-end bottom-0 left-6 w-[calc(100%_-_48px] pb-8 lg:left-10 lg:w-[calc(100%_-_80px)]">
          <div className="relative w-full z-[2]">
            <div className="absolute left-0 bottom-0">
              <p className="min-[834px]:whitespace-pre-line lg:text-[13px] lg:leading-5 text-[11px] leading-4 text-left text-white max-w-[500px]">
                Create, order and sell custom merch, accessories and print on
                demand apparel using industry-leading fashion blanks, with no
                minimum order quantity.
              </p>
            </div>
          </div>
          <span className="relative z-[2] font-gothic font-medium text-[9px] text-left wrap-anywhere [text-wrap:nowrap_balance] leading-[13px] text-white select-none lg:leading-normal uppercase">
            empowered by h&m group
          </span>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src={home_hero}
            alt=""
            className="absolute h-full w-full inset-0 pointer-events-none select-none object-cover"
          />
          <div className="bg-black/40 absolute w-full h-full top-0 left-0 z-[1]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
