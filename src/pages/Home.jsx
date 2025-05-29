import { Helmet } from "react-helmet-async";
import { true_blank } from "../assets";
import Brands from "../components/layouts/Brands";
import CinematicSlider from "../components/layouts/CinematicSlider";
import CostChecker from "../components/layouts/CostChecker";
import Gallery from "../components/layouts/Gallery";
import Hero from "../components/layouts/Hero";
import Offering from "../components/layouts/Offering";
import Products from "../components/layouts/Products";
import { texts } from "../constants";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <Brands texts={texts} />
      <Offering />
      <CostChecker />
      <CinematicSlider />
      <section className="flex flex-col gap-4 py-10 px-6 lg:px-20 lg:gap-6">
        <div className="relative h-[30px] m-auto aspect-[375/50] min-[834px]:h-[35px] lg:h-[50px]">
          <img
            src={true_blank}
            className="absolute size-full inset-0 object-cover"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center flex-col w-full h-auto">
          <h2 className="text-[34px] leading-[42px] text-center text-white lg:text-[75px] lg:leading-20">
            fashion made for merch
          </h2>
        </div>
      </section>
      <Brands texts={texts} />
      <Gallery />
      <Products />
    </>
  );
};

export default Home;
