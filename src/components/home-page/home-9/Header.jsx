import MainMenu from "@/components/header/MainMenu";
import PortfolioMenu from "@/components/header/PortfolioMenu";
import { left } from "@popperjs/core";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";


const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-nine ${
        navbar ? "fixed" : ""
      }`}
    >
      {/* <div className="notice-banner text-center"> */}
      <div className="container-fluid notice-banner p-0 bg-light d-none d-lg-block">
        <div className="row gx-0 d-lg-flex">
          <div className="col-lg-6 col-sm-12 col-md-4 px-0 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-0">
              <a href="/index.html" className="navbar-brand d-flex sticky-top px-4 px-lg-2">
                <img src="https://kpenggs.com/assets/images/logoimg.jfif" alt="Logo" style={{ height: '80px', width: '120px'  }} />
              </a>
              <div>
                <h5 className="top_heading1 mt-5">KP Engineering Services</h5>
                <h6 className="top_heading_design1">Knowledgeable & Professional</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-flex justify-content-end" style={{ paddingRight: '0px' }}>
            <div className="h-100 d-inline-flex align-items-center py-0 me-3">
              <small className="fa fa-phone-alt icon-large" style={{ color: 'orange' }}></small>
              <small style={{ color: 'black', fontSize: '14px' }}>+91 8856032610</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <a href="#" className="btn btn-sm-square bg-white me-1"><i className="fab fa-facebook" style={{ color: 'orange' }}></i></a>
              <a href="#" className="btn btn-sm-square bg-white me-1"><i className="fab fa-twitter" style={{ color: 'orange' }}></i></a>
              <a href="#" className="btn btn-sm-square bg-white me-1"><i className="fab fa-youtube" style={{ color: 'orange' }}></i></a>
              <a href="#" className="btn btn-sm-square bg-white me-0"><i className="fab fa-instagram" style={{ color: 'orange' }}></i></a>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* End notice banner */}

      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            
          </div>
          {/* End logo */}

         
          {/* /.right-widget */}
          <PortfolioMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default Header;
