import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from 'F:\KPE\Frontend\kpenggs\src\Images\logoimg.jfif.jpg';
import logo from 'file:///F:/KPE/Frontend/kpenggs/src/Images/logoimg.jfif.jpg';



const Headers = () => {
  return (
    <header className="bg-light p-3 shadow-sm">
    <div className="container d-flex align">
      <img src={logo} alt="Company Logo" className="d-inline-block align-top justify-content-start" width="120"  height="80"/>
      <h1 className="company-name mb-0">KP Engineering Services</h1>
    </div>
  </header>  
      
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container">
    //     {/* Logo */}
    //     <a className="navbar-brand" href="#">
    //       <img
    //         src="https://kpenggs.com/assets/images/logoimg.jfif"
    //         alt="Logo"
    //         width="80"
    //         height="80"
    //         className="d-inline-block align-top"
    //       />
    //       KP Engineering Services
    //       Knowledgeable & Professional
    //     </a>
        
    //     {/* Toggler/collapsible Button for Mobile View */}
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
        
    //     {/* Navigation Links */}
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             HOME
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             ABOUT US
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             PROJECT
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             SERVICES
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             CONTACT US
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Headers;
