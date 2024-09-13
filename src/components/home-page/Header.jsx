import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const NoticeBar = () => {
return (
<div  className="container-fluid p-0 bg-light d-none d-lg-block">
   <div  className="row gx-0 d-lg-flex">
      <div  className="col-lg-6 col-sm-12 col-md-4 px-0 text-start">
         <div  className="h-100 d-inline-flex align-items-center py-0 me-0">
            <a  href="/index.html" className="navbar-brand d-flex sticky-top px-4 px-lg-2"> <img src="https://kpenggs.com/assets/images/logoimg.jfif" alt="Logo" style={{ height: '80px', width: '115px' }} /> </a> 
            <div>
               <div >
                  <h5  className="top_heading1 mt-5">KP Engineering Services</h5>
                  <h6  className="top_heading_design1">Knowledgeable &amp; Professional </h6>
               </div>
            </div>
         </div>
      </div>
      <div className="col-lg-6 d-none d-lg-flex justify-content-end">
         <div className="h-100 d-inline-flex align-items-center py-0 me-3">
            <small className="fa fa-phone-alt" style={{ color: "#f88f4a" }}></small> {/* Phone icon */}
            <small style={{ color: "black", fontSize: "14px" }}>+91 8856032610</small>
         </div>
         <div className="h-100 d-inline-flex align-items-center">
            <a href="#" className="btn btn-sm-square bg-white me-1">
            <i className="fab fa-facebook-f" style={{ color: "#f88f4a" }}></i> {/* Facebook icon */}
            </a>
            <a href="#" className="btn btn-sm-square bg-white me-1">
            <i className="fab fa-twitter" style={{ color: "#f88f4a" }}></i> {/* Twitter icon */}
            </a>
            <a href="#" className="btn btn-sm-square bg-white me-1">
            <i className="fab fa-youtube" style={{ color: "#f88f4a" }}></i> {/* YouTube icon */}
            </a>
            <a href="#" className="btn btn-sm-square bg-white me-0">
            <i className="fab fa-instagram" style={{ color: "#f88f4a" }}></i> {/* Instagram icon */}
            </a>
         </div>
      </div>
   </div>
</div>
);
};
const NavbarComponent = ({ isFixed }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`navbar navbar-expand-sm justify-content-end ${isFixed ? 'fixed-top' : ''} navbar-custom`} 
      style={{ backgroundColor: '#f88f4a !important' }}
    >
      {/* Mobile menu toggle button */}
      <button 
        className="navbar-toggler ms-auto justify-content-end" 
        type="button" 
        onClick={toggleMenu} 
        aria-controls="navbarSupportedContent" 
        aria-expanded={isMenuOpen ? 'true' : 'false'} 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div 
        className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} 
        id="navbarSupportedContent"
        style={{ backgroundColor: '#f88f4a' }} // Orange background for mobile menu
      >
        {/* Aligning menu items to the right */}
        <ul className="navbar-nav ms-auto justify-content-end" style={{ backgroundColor: '#f88f4a !important' }}>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'white' }}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'white' }}>Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'white' }}>Pricing</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


const Header = () => {
const [isFixed, setIsFixed] = useState(false);
const noticeRef = useRef(null);
const handleScroll = () => {
const noticeHeight = noticeRef.current.offsetHeight;
if (window.scrollY > noticeHeight) {
setIsFixed(true);
} else {
setIsFixed(false);
}
};
useEffect(() => {
window.addEventListener('scroll', handleScroll);
return () => {
window.removeEventListener('scroll', handleScroll);
};
}, []);
return (
<div >
   <div ref={noticeRef}>
      <NoticeBar />
   </div>
   <div >
      <NavbarComponent isFixed={isFixed} />
   </div>
</div>
);
};
export default Header;