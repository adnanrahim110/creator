import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const About = lazy(() => import("../pages/About"));
const Home = lazy(() => import("../pages/Home"));
const Service = lazy(() => import("../pages/Service"));
const Techniques = lazy(() => import("../pages/Techniques"));
const Technique = lazy(() => import("../pages/Technique"));
const SignIn = lazy(() => import("../pages/SignIn"));
const WhoAreYou = lazy(() => import("../pages/WhoAreYou"));
const Responsibility = lazy(() => import("../pages/Responsibility"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/who-are-you" element={<WhoAreYou />} />
        <Route path="/responsibility" element={<Responsibility />} />
        <Route path="/services/:service" element={<Service />} />
        <Route path="/techniques" element={<Techniques />} />
        <Route path="/techniques/:technique" element={<Technique />} />
        <Route path="/:auth" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
