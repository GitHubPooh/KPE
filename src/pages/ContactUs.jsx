import { useState } from "react";
import FooterContent from "@/components/footer/FooterContent";
import Seo from "../components/common/Seo";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import CopyrightFooter from "@/components/footer/CopyrightFooter";
import "bootstrap/dist/js/bootstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <>
      <Seo pageTitle="KPE Engineering" />
      <Header />
      
      <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>

      <div className="row">
        {/* Address Section */}
        <div className="col-md-6">
          <div className="contact-info">
            <i className="fas fa-map-marker-alt"></i>
            <h2>Address</h2>
            <p>Office No, 3 & 4 Nanded City, Sinhgad Road</p>
            <p>Opposite Celebram IT Park,</p>
            <p>Nanded City, Pune, Maharashtra 411068</p>
          </div>
        </div>

        {/* Customer Care Section */}
        <div className="col-md-6">
          <div className="contact-info">
            <i className="fas fa-user"></i>
            <h2>Customer Care</h2>
            <p>pembkpenggs.com</p>
            <p>infokpenggs.com</p>
            <p>+91 8856032610</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container1 mt-5">
        <p className="contact-info1">
          We'd love to hear from you, please drop us a line if you've any query or question.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-control"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            <i className="fas fa-paper-plane" style={{ color: "white", fontSize: "10px" }}></i> Send
          </button>
        </form>
      </div>
    </div>

          <div className="footer-style-four text-light theme-basic-footer position-relative"><div >
            <div className="container-fluid bg-dark text-light footer wow fadeIn">
              <div className="inner-wrapper text-light row justify-content-between">
              <FooterContent />
              <hr className="custom-hr" />
              <CopyrightFooter/>
              </div>
            </div>
            
          </div>
      </div>
    </> 
  );
};

export default ContactUs;
