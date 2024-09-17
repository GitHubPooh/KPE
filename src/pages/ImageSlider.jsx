import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../scss/_ImageSlider.css'; // Import your CSS file

const ImageSlider = () => {
  const [images, setImages] = useState([
    "https://kpenggs.com/business_guru_admin/Product_Image/623703966.jpg",
    "https://kpenggs.com/business_guru_admin/Product_Image/873375907.jpeg",
    "https://kpenggs.com/business_guru_admin/Product_Image/873431237.jfif",
    "https://kpenggs.com/business_guru_admin/Product_Image/873497315.jfif"
  ]);

  useEffect(() => {
    // Fetch images from an API or other source if needed
    // Replace this with your actual image fetching logic
    // setImages(fetchedImages);
  }, []);

  return (
    <Carousel className="custom-carousel">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
