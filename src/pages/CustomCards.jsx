import React from 'react';

const CustomCards = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card__three card zoomOut">
            <div className="card-img-container">
              <img
                src="https://kpenggs.com/assets/images/kp1.jpg"
                className="card-img-top max-width-100"
                alt="Card 1"
              />
              <div className="card-heading">Card 1</div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card__three card zoomOut">
            <div className="card-img-container">
              <img
                src="https://kpenggs.com/assets/images/kp2.jpg"
                className="card-img-top max-width-100"
                alt="Card 2"
              />
              <div className="card-heading">Card 2</div>
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
              <div className="card-heading">Card 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCards;
