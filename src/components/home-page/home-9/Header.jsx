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
      <div className="notice-banner text-center "style={{
            position: "relative"}}>

 
   
            <div className="d-inline-flex align-items-left">
              <a href="/index.html" className="navbar-brand d-flex sticky-top">
                <img src="https://kpenggs.com/assets/images/logoimg.jfif" alt="Logo" style={{ height: '40px', width: '120px'  }} />
              </a>
              <div>
                <h5 className="top_heading1 mt-5">KP Engineering Services</h5>
                <h6 className="top_heading_design1">Knowledgeable & Professional</h6>
              </div>
            </div>
           
          </div>

      {/* End notice banner */}

      <div className="position-relative" style={{
            backgroundColor: "orange"}}>
        <div className="d-flex align-items-right" style={{
            backgroundColor: "orange"}}>

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
