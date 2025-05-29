import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { gallery } from "../../constants";
import Button from "../ui/Button";

const Gallery = () => {
  return (
    <section className="flex w-full h-[60dvh] min-[834px]:h-[90dvh] min-[834px]:max-h-[810px] glry_slider">
      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView="auto"
        autoplay={{ delay: 0 }}
        speed={12000}
        className="flex items-start justify-start flex-nowrap w-full h-full"
      >
        {gallery.map((item, index) => {
          if (item.img) {
            return (
              <SwiperSlide
                key={index}
                className="relative h-full w-[50vw] grow shrink basis-1/2 min-w-[417px] select-none group"
              >
                <div className="flex items-start justify-start flex-col flex-nowrap w-auto h-full relative group">
                  <img
                    src={item.img}
                    alt=""
                    className="absolute size-full inset-0 object-cover"
                  />
                </div>
                <div className="absolute inset-0 size-full px-5 py-2.5 flex flex-col items-center justify-between opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out">
                  <div className="flex items-center justify-between w-full">
                    <span className="uppercase font-bold text-[13px]">
                      {item.title}
                    </span>
                    <div className="inline-flex items-center justify-center gap-2">
                      {item.colors.map((c, idx) => (
                        <span
                          key={idx}
                          className="w-2.5 h-2.5 rounded-full block"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>
                  <Button btn2 className="w-full">
                    Start Designing
                  </Button>
                </div>
              </SwiperSlide>
            );
          } else if (item.split) {
            return (
              <SwiperSlide
                key={index}
                className="flex justify-start flex-col flex-nowrap w-auto! h-full"
              >
                {item.split.map((i, idx) => (
                  <div
                    key={idx}
                    className="relative h-1/2 w-[90vw] min-w-[300px] grow shrink basis-1/4 select-none min-[834px]:w-[25vw] group"
                  >
                    <div className="flex items-start justify-start flex-col flex-nowrap w-auto h-full">
                      <img
                        src={i.img}
                        alt=""
                        className="absolute size-full inset-0 object-cover object-center"
                      />
                    </div>
                    <div className="absolute inset-0 size-full px-5 py-2.5 flex flex-col items-center justify-between opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out">
                      <div className="flex items-center justify-between w-full">
                        <span className="uppercase font-bold text-[13px]">
                          {i.title}
                        </span>
                        <div className="inline-flex items-center justify-center gap-2">
                          {i.colors.map((c, idx) => (
                            <span
                              key={idx}
                              className="w-2.5 h-2.5 rounded-full block"
                              style={{ backgroundColor: c }}
                            />
                          ))}
                        </div>
                      </div>
                      <Button btn2 className="w-full">
                        Start Designing
                      </Button>
                    </div>
                  </div>
                ))}
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </section>
  );
};

export default Gallery;
