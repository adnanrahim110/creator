import OpenAtTop from "./components/common/OpenAtTop";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import CursorProvider from "./providers/CursorProvider";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <CursorProvider>
      <Header />
      <AppRoutes />
      <OpenAtTop />
      <Footer />
    </CursorProvider>
  );
};

export default App;
