import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./styles/index.scss";
import "bootstrap/dist/js/bootstrap";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CustomerForm from "./pages/CustomerForm";
//import SupplierForm from "./pages/supplierForm";
import StaticSupplierForm from "./pages/staticSupplierForm";
import NotFound from "./pages/404";
import ScrollToTop from "./components/common/ScrollTop";
import ScrollTopBehaviour from "./components/common/ScrollTopBehavier";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {

  return (
    <div className="main-page-wrapper">
      <Routes>
        <Route path="/">
          <Route index element={<StaticSupplierForm />} />
          {/* <Route path="/new" element={<SupplierForm />} />
          {/* <Route path="/project" element={<Project/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<ContactUs/>} /> */}
          {/* <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
      {/* <ScrollTopBehaviour />
      <ScrollToTop /> */}
    </div>
  );
}

export default App;
