import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from 'F:\KPE\Frontend\kpenggs\src\Images\logoimg.jfif.jpg';
import logo from 'file:///F:/KPE/Frontend/kpenggs/src/Images/logoimg.jfif.jpg';
import '../App.css'

const HomePage = () => {
  return (
    <main>
      <div className='Headers'  style={{ backgroundColor:'#fff'}} >
      <header className="bg-light p-3 shadow-sm">
        <div className="container d-flex align">
        <img src={logo} alt="Company Logo" className="d-inline-block align-top justify-content-start" width="120"  height="80"/>
        <h1 className="company-name mb-0">KP Engineering Services</h1>
        <h1 className="company-name mb-0">Knowledgeable & Professional</h1>
        </div>
      </header> 
      </div>
    </main>
  );
}

export default HomePage;
