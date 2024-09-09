// src/Components/HomePage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'; // Import social media icons

function HomePage() {
  return (
    <div>
      {/* Top bar with phone number and social media icons */}
      <div className="top-bar bg-light py-2">
        <div className="container-fluid d-flex justify-content-end align-items-center">
          {/* Right-aligned Social Media Icons and Phone Number */}
          <div className="d-flex align-items-center">
            <span className="me-3 d-flex align-items-center">
              <FaPhoneAlt className="me-2" /> {/* Phone icon */}
              <span className="phone-number">+91 8856032610</span>
            </span>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex align-items-center">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="https://kpenggs.com/assets/images/logoimg.jfif"
              alt="Logo"
              width="120"
              height="80"
              className="d-inline-block align-top"
            />
            {/* Right-side Content: Company Name and Tagline */}
            <div className="ms-3">
              <h1 className="company-name mb-0" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
                KP Engineering Services
              </h1>
              <h2 className="tagline mb-0" style={{ fontSize: '1rem', color: '#666' }}>
                Knowledgeable & Professional
              </h2>
            </div>
          </a>

          {/* Toggler/collapsible Button for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"> HOME </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> ABOUT US </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> PROJECT </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> SERVICES </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> CONTACT US </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomePage;
