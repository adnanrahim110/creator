import AnimatedCursor from "react-animated-cursor";
import OpenAtTop from "./components/common/OpenAtTop";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <Header />
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="#fff"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="submit"]',
          'input[type="image"]',
          "button",
          ".link",
        ]}
      /> */}
      <AppRoutes />
      <OpenAtTop />
      <Footer />
    </>
  );
};

export default App;
