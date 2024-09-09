import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./styles/index.scss";
import ScrollToTop from "./components/common/ScrollTop";
import "bootstrap/dist/js/bootstrap";

import { Route, Routes } from "react-router-dom";

import PersonalPortfolio from "./pages/home/personal-portfolio";

import LogIn from "./pages/login";
import SignUp from "./pages/signup";
import NotFound from "./pages/404";

import ScrollTopBehaviour from "./components/common/ScrollTopBehavier";
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
          <Route index element={<PersonalPortfolio />} />

          <Route
            path="home/personal-portfolio"
            element={<PersonalPortfolio />}
          />

          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
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
