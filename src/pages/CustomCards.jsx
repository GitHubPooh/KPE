import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomCards = () => {
  return (
    <div className="container-fluid mt-0" style={{paddingTop:"0%" }} >
      <div className="row mt-0"  >
        <div className="col-md-4 mt-0">
          <div className="card__three card zoomOut">
            <div className="card-img-container">
              <img
                src="https://kpenggs.com/assets/images/kp1.jpg"
                className="card-img-top max-width-100"
                alt="Card 1"
              />
              <div className="card-heading">Pre-Metal</div>
            </div>
          </div>
        </div>
        <div className="col-md-4" >
          <div className="card__three card zoomOut">
            <div className="card-img-container">
              <img
                src="https://kpenggs.com/assets/images/kp2.jpg"
                className="card-img-top max-width-100"
                alt="Card 2"
              />
              <div className="card-heading">Hybrid pre-Metal</div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card__three card zoomOut">
            <div className="card-img-container">
              <img
                src="https://kpenggs.com/assets/images/kp3.jpg"
                className="card-img-top max-width-100"
                alt="Card 3"
              />
              <div className="card-heading">Approval Drawing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCards;
