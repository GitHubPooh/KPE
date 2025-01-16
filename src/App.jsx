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
import PurchaseInvoice from "./pages/purchaseInvoice";
import PISupplierModal from "./components/pI/SupplierNamesModal";
import NotFound from "./pages/404";
import ScrollToTop from "./components/common/ScrollTop";
import ScrollTopBehaviour from "./components/common/ScrollTopBehavier";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DataProvider } from "./components/pI/DataContext";
import Wrapper from "./layout/wrapper";


function MainRoot() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/">
          <Route index element={<StaticSupplierForm />} />
          <Route path="/PI" element={<PurchaseInvoice />} />
          {/* <Route path="/P" element={<PISupplierModal showModal={true} />} /> */}
          {/* Additional Routes for other pages */}
          {/* <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
      {/* <ScrollTopBehaviour />
      <ScrollToTop /> */}
    </Wrapper>
  );
}

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="main-page-wrapper">
      <DataProvider>
        <MainRoot />
      </DataProvider>
    </div>
  );
}

export default App;