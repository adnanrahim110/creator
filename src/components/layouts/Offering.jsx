import { Fragment, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import {
  arrow_left,
  offering_0,
  offering_1,
  offering_2,
  offering_3,
  offering_4,
  offering_5,
  offering_6,
  offering_7,
  offering_8,
} from "../../assets";
import SecTitle from "../ui/SecTitle";

const offering = [
  {
    title: "Direct to garment",
    img: offering_1,
    path: "/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem sed hic! Aperiam fugit nihil ipsum corporis praesentium fuga vel!",
  },
  {
    title: "POD platform",
    img: offering_2,
    path: "/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem sed hic! Aperiam fugit nihil ipsum corporis praesentium fuga vel!",
  },
  {
    title: "Integrations",
    img: offering_3,
    path: "/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem sed hic! Aperiam fugit nihil ipsum corporis praesentium fuga vel!",
  },
  {
    title: "Screen printing",
    img: offering_4,
    path: "/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem sed hic! Aperiam fugit nihil ipsum corporis praesentium fuga vel!",
  },
  {
    title: "Embroidery",
    img: offering_5,
    path: "/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem sed hic! Aperiam fugit nihil ipsum corporis praesentium fuga vel!",
  },
  {
    title: "Rhinestone",
    img: offering_6,
    path: "/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem sed hic! Aperiam fugit nihil ipsum corporis praesentium fuga vel!",
  },
  {
    title: "Wholesale",
    img: offering_7,
    path: "/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem sed hic! Aperiam fugit nihil ipsum corporis praesentium fuga vel!",
  },
  {
    title: "Live experience",
    img: offering_8,
    path: "/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem sed hic! Aperiam fugit nihil ipsum corporis praesentium fuga vel!",
  },
];

const Offering = () => {
  const [showImg, setShowImg] = useState(null);
  return (
    <>
      <SecTitle title="your one-stop merch platform" />
      <div className="mx-auto px-6 lg:px-20 py-6 lg:py-10">
        <div className="grid relative grid-cols-[1fr_1fr]">
          <div className="flex gap-6 float-start justify-start flex-col flex-nowrap w-auto h-full">
            <div className="sticky top-8 flex gap-6 justify-start items-start flex-col h-auto w-auto">
              <span className="font-gothic font-medium text-[11px] leading-4 text-left text-white lg:text-[15px] uppercase">
                our Offering
              </span>
              <div className="flex justify-start items-start flex-col w-auto h-auto">
                {offering.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onMouseEnter={() => setShowImg(item.img)}
                    onMouseLeave={() => setShowImg(null)}
                    className={`text-white flex gap-6 cursor-pointer p-1 items-center relative group`}
                  >
                    <span className="font-lora font-normal text-xl leading-[29px] text-left text-white lg:text-[37px] lg:leading-[42px]">
                      {item.title}
                    </span>
                    <img
                      src={arrow_left}
                      className="absolute top-1/2 mt-1 -translate-y-1/2 -right-14 invert w-10 -translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative max-h-[840px] lg:h-[1200px] lg:max-h-[80dvh]">
            <div className="flex justify-start items-start flex-col w-auto h-auto">
              <img
                src={offering_0}
                className="absolute w-full h-full inset-0 object-cover"
                alt=""
              />
            </div>
            {offering.map((item, idx) => (
              <Fragment key={idx}>
                <div
                  className={`absolute h-full w-full ${
                    showImg === item.img ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300 flex justify-start items-start flex-col`}
                >
                  <div className="absolute bg-black/40 left-0 top-0 size-full z-[1]" />
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute size-full inset-0 object-cover"
                  />
                </div>
                <p
                  className={`max-w-4/5 absolute bottom-6 left-6 ${
                    showImg === item.img ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300 z-[1] min-[834px]:whitespace-pre-line lg:text-lg lg:leading-[23px] text-[13px] leading-[18px] text-left text-white `}
                >
                  {item.text}
                </p>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Offering;
