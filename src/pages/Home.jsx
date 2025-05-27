import { Helmet } from "react-helmet-async";
import Brands from "../components/layouts/Brands";
import CinematicSlider from "../components/layouts/CinematicSlider";
import CostChecker from "../components/layouts/CostChecker";
import Hero from "../components/layouts/Hero";
import Offering from "../components/layouts/Offering";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <Brands />
      <Offering />
      <CostChecker />
      <CinematicSlider />
    </>
  );
};

export default Home;
