import React from 'react';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import { object } from 'prop-types';
import { auto } from '@popperjs/core';

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        width: 100,
        height: 120,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Time in milliseconds
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
      

  return (
    <div className="slider-container" width= "100%" margin= "0 auto" >
      <Slider {...settings}>
        <div>
          <img src="https://kpenggs.com/business_guru_admin/Product_Image/623703966.jpg" alt="Slide 1" className="slider-image" />
        </div>
        <div>
          <img src="https://kpenggs.com/business_guru_admin/Product_Image/873375907.jpeg" alt="Slide 2" className="slider-image" />
        </div>
        <div>
          <img src="https://kpenggs.com/business_guru_admin/Product_Image/873431237.jfif" alt="Slide 3" className="slider-image" />
        </div>
        <div>
          <img src="https://kpenggs.com/business_guru_admin/Product_Image/873497315.jfif" alt="Slide 4" className="slider-image" />
        </div>
        <div>
          <img src="https://kpenggs.com/business_guru_admin/Product_Image/873559655.jfif" alt="Slide 5" className="slider-image" />
        </div>
        <div>
          <img src="https://kpenggs.com/business_guru_admin/Product_Image/873578876.jpeg" alt="Slide 6" className="slider-image" />
        </div>
        <div>
          <img src="https://kpenggs.com/business_guru_admin/Product_Image/873600175.jpeg" alt="Slide 7" className="slider-image" />
        </div>
        <div>
          <img src="https://kpenggs.com/business_guru_admin/Product_Image/873642040.jpg" alt="Slide 8" className="slider-image" />
        </div>
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

export default ImageSlider;
