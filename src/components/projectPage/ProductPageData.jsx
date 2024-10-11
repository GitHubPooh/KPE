import React, { useState } from 'react';

const ProductPageData = ({ images }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [zoomPosition, setZoomPosition] = useState({ x: '50%', y: '50%' });
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsZoomed(true);
    setIsZoomedIn(false); // Start with zoomed out view
  };

  const handleZoomToggle = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const xPos = (offsetX / target.width) * 100;
    const yPos = (offsetY / target.height) * 100;

    setZoomPosition({ x: `${xPos}%`, y: `${yPos}%` });
    setIsZoomedIn((prev) => !prev); // Toggle zoom in/out
  };

  const handleClose = () => {
    setIsZoomed(false);
    setCurrentImage(null);
  };

  return (
    <div className="container-fluid">
      <h2 className="section-heading">Our Highlights</h2>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-3" key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="img-fluid clickable"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      {isZoomed && (
        <div className="zoom-modal">
          <div className="zoom-content" onClick={handleZoomToggle}>
            <img
              src={currentImage}
              alt="Zoomed"
              style={{
                transform: isZoomedIn ? 'scale(2)' : 'scale(1)', // Scale for zoom effect
                transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`, // Zoom based on click position
              }}
            />
          </div>
          <button className="close-btn" onClick={handleClose}>✕</button>
        </div>
      )}
    </div>
  );
};

export default ProductPageData;
