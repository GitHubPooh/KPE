import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageWithParagraph = () => {
  return (
  <>
  {/* image with title and paragraph section after customcards, css added in main*/}
  <section className="image-text-section py-4" style={{ marginBottom: 0 }}>
  <div className="container" style={{marginBottom:"50px"}}>
    <div className="row" >
      <div className="col-12 col-md-6 order-md-1 order-1">
        <img src="https://kpenggs.com/assets/images/kphome1.jpg" alt="Text Image" className="img-fluid" />
      </div>
     <div className="col-12 col-md-6 order-md-2 order-2">
      <h3 className="custom-heading">KP Engineering Services</h3>
      <p className="custom-paragraph">
        KP Engineering Services is equipped with both an exceptional team of experienced detailers/checkers
        and the highest standards of software technology to take on any Metal Building/Storage Building 
        detailing project. Our team executes effective systems and procedures to deliver on-time accurate 
        drawings and structural models.
      </p>
     </div>
    </div>
  </div>
</section>
{/* Heading with underline and workflow chart, css added in main.scss */}
<section className="text-center py-0">
<h2 className="workflow heading">KP Engineering Services Work Flow & Procedure</h2>
<br />
<img src="https://kpenggs.com/assets/images/workflowkp.png" alt="Description of image"  
className="workflow-image w-100 h-100" />
</section>
</>
  );
};

export default ImageWithParagraph;
