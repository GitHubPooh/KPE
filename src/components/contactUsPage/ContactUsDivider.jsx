import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUsDivider = () => {
  return (
    <div className="container mt-5" style={{ backgroundColor: "#fff" }}>
      <h1 className="text-center mb-4 contact-page-heading">Contact Us</h1>

      <div className="row">
        {/* Address Section */}
        <div className="col-md-6 address-section">
          <div className="contact-info">
            <i className="fas fa-map-marker-alt"></i>
            <h2>Address</h2>
            <p>Office No, 3 & 4 Nanded City, Sinhgad Road</p>
            <p>Opposite Celebram IT Park,</p>
            <p>Nanded City, Pune, Maharashtra 411068</p>
          </div>
        </div>

        {/* Customer Care Section */}
        <div className="col-md-6 customer-care-section">
          <div className="contact-info">
            <i className="fas fa-user"></i>
            <h2>Customer Care</h2>
            <p>pembkpenggs.com</p>
            <p>infokpenggs.com</p>
            <p>+91 8856032610</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsDivider;
