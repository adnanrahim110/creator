import { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cinematic_1, cinematic_2 } from "../../assets";

const sliderInfo = [
  {
    title: "hanna is golden",
    img: cinematic_1,
    text: '"The little messages (on my merch) align with what I post on TikTok and seem to resonate with people. The ‘I got places to go but I love dancehall’ line for example. The response has been cool. I want to try different things and messages because it’s so easy to create the products."',
  },
  {
    title: "omnipollo",
    img: cinematic_2,
    text: '"The little messages (on my merch) align with what I post on TikTok and seem to resonate with people. The ‘I got places to go but I love dancehall’ line for example. The response has been cool. I want to try different things and messages because it’s so easy to create the products."',
  },
];

const CinematicSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative w-full aspect-[390/550] max-h-[550px] min-[834px]:aspect-[1440/840] min-[834px]:max-h-[840px] lg:max-h-[80vh]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        loop
        autoplay={{ delay: 3000 }}
        speed={1200}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="size-full"
      >
        {sliderInfo.map((item, idx) => (
          <SwiperSlide key={idx} className="size-full">
            <div className="size-full mx-auto px-6 lg:px-20 relative">
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 size-full bg-black/40" />
              <div className="absolute w-full bottom-10 grid grid-cols-[1fr_1fr] gap-8 left-1/2 -translate-x-1/2 items-end z-[2] lg:px-20 mx-auto px-6">
                <div className="relative w-full z-[2] h-14 flex justify-start items-start flex-col">
                  <div className="absolute bottom-[calc(100%_+_32px)]">
                    <span className="lg:text-[63px] lg:leading-[68px] text-3xl leading-9 lg:max-w-[560px] block select-none max-w-xs text-white font-lora lowercase">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex flex-row gap-8 items-center absolute h-14" />
                </div>
                <div className="relative items-end justify-end w-full z-[2] h-14 flex flex-col">
                  <div className="absolute lg:w-[calc(100%_-_64px)] bottom-4 left-0">
                    <p className="text-[13px] leading-[18px] text-white lg:text-lg lg:leading-5 min-[834px]:whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 justify-start items-start w-auto h-auto">
                    {sliderInfo.map((_, idx) => {
                      const isActive = idx === activeIndex;
                      return (
                        <button
                          onClick={() => swiperInstance?.slideTo(idx)}
                          key={idx}
                          className={`size-2.5 bg-white ${
                            isActive ? "opacity-100" : "opacity-30"
                          } rounded-full transition-opacity duration-500`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CinematicSlider;
