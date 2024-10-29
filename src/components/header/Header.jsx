import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Header = () => {
  return (
    <div className="header-container">
      <div class="row">
            <div class="col-md-9 left-column">
                <h4 class="companyName">MAVERICK : POOJA</h4>
                <p>Office No.5, First Floor Chaitanya Industrial Estates,Manaji Nagar,PUNE, MAHARASHTRA</p>
                <p class="formName">Supplier Master</p>
            </div>
            <div class="col-md-3 right-column">
                <h4 class="companyName">Maverick IT Industries Pvt. Ltd.</h4>
                <p>www.maverickit.in</p>
                <p class="companyNumber">07249887835</p>
            </div>
        </div>
    </div>
  );
};

export default Header;
