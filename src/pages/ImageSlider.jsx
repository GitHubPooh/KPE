import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../../scss/_ImageSlider.css'; // Import your CSS file

const ImageSlider = () => {
  const [images, setImages] = useState([
    "https://kpenggs.com/business_guru_admin/Product_Image/623703966.jpg",
    "https://kpenggs.com/business_guru_admin/Product_Image/873375907.jpeg",
    "https://kpenggs.com/business_guru_admin/Product_Image/873431237.jfif",
    "https://kpenggs.com/business_guru_admin/Product_Image/873497315.jfif",
    "https://kpenggs.com/business_guru_admin/Product_Image/873559655.jfif",
    "https://kpenggs.com/business_guru_admin/Product_Image/873578876.jpeg",
    "https://kpenggs.com/business_guru_admin/Product_Image/873600175.jpeg"
  ]);

  useEffect(() => {
    // Fetch images from an API or other source if needed
    // Replace this with your actual image fetching logic
    // setImages(fetchedImages);
     // Replace this URL with your actual API endpoint or logic for fetching images
     const fetchImages = async () => {
        const response = await fetch("https://kpenggs.com/business_guru_admin/Product_Image/873559655.jfif"); // Example API
        const data = await response.json();
  
        // Map to image URLs if needed
        const fetchedImages = data.map(item => item.url);
        setImages(fetchedImages);
      };
  
      fetchImages();
  }, []);

  return (
    <div className="image-slider-container mb-0" style={{ marginBottom:"0%" }}>
    <Carousel className="custom-carousel" 
        prevIcon={<span className="carousel-control-prev-icon custom-prev-icon" />}
        nextIcon={<span className="carousel-control-next-icon custom-next-icon" />}
        controls
      >
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
    </div>
  );
};

export default ImageSlider;
