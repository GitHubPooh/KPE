import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./styles/index.scss";
import ScrollToTop from "./components/common/ScrollTop";
import "bootstrap/dist/js/bootstrap";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/404";
import ScrollTopBehaviour from "./components/common/ScrollTopBehavier";
import Landing from "./pages/landing";
import AboutUs from "./pages/AboutUs";
import Project from "./pages/Project";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="main-page-wrapper">
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/project" element={<Project/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ScrollTopBehaviour />
      <ScrollToTop />
    </div>
  );
}

export default App;
