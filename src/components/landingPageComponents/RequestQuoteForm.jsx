import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RequestQuoteForm = () => {
  return (
    <div className="container-fluid bg-light overflow-hidden my-5 mt-5 px-lg-0">
      <div className="row g-1 mx-lg-0">
        {/* Left Side: No Padding, Center Aligned Content */}
        <div className="col-lg-6 ps-lg-0 d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "400px", backgroundColor: '#f88f4a' }}>
          <div className="icon">
            <img src="https://kpenggs.com/assets/images/civil.png" alt="Icon Image" className="img-fluid" />
          </div>
          <h1>25+</h1>
          <p>Engineers</p>
          <div className="icon">
            <img src="https://kpenggs.com/assets/images/civil1.png" alt="Icon Image" className="img-fluid" />
          </div>
          <h1>400+</h1>
          <p>Successful Projects</p>
        </div>

        

        {/* Right Side: Quote Form */}
        <div className="col-md-6 quote-text py-5 d-flex align-items-center justify-content-center">
          <div className="p-4 p-lg-5 w-100">
            <div className="section-title text-start">
              <h1 className="mb-4" style={{ fontSize: '30px' }}>Request a Quote</h1>
            </div>
            <h6 className="mb-4 pb-2 text-body" style={{ fontWeight: 200 }}>
              Do you have questions on Metal Building OR Storage Building Detailing? Send us your query to 
              <a href="mailto:info@kpenggs.com"> info@kpenggs.com</a>. Our professionals will always be there to assist you.
            </h6>

            <form noValidate autoComplete="off">
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                <textarea
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className="form-control border-0"
                    style={{ height: '55px' }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                <textarea
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    className="form-control border-0"
                    style={{ height: '55px' }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                <textarea
                    type="text"
                    placeholder="Your Mobile"
                    name="mobile_no"
                    className="form-control border-0"
                    style={{ height: '55px' }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                <textarea
                    placeholder="Special Note"
                    name="special_Note"
                    className="form-control border-0"
                    style={{ height: '55px' }}
                  ></textarea>
                </div>
                <div className="col-12" style={{ backgroundColor: '#f88f4a' }}>
                  <button type="submit" className="btn w-100 py-3">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuoteForm;
