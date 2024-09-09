import React from 'react';
import { Link } from 'react-router-dom';

function Footers() {
  return (
    <footer>
    <h1>Quick Links</h1>
    <Link to="About Us"> About Us</Link>
    <br/>
    <Link to="Contact Us"> Contact Us</Link>
    <br/>
    <p>© 2024 KP Enggs. All rights reserved.</p>
    </footer>
  );
}

export default Footers;
