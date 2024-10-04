import React, { useState } from 'react';
import FooterContent from "@/components/footer/FooterContent";
import Seo from "../components/common/Seo";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import CopyrightFooter from "@/components/footer/CopyrightFooter";
import "bootstrap/dist/js/bootstrap";

const Project = () => {
  const [images] = useState([
"https://kpenggs.com/business_guru_admin/Product_Image/172362799088_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172362803096_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172362806178_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172362808880_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172362811076_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172362813318_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172362815467_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172362817413_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172362819443_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172362821713_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172362823934_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387408213_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387413044_0.webp",
"https://kpenggs.com/business_guru_admin/Product_Image/172387415464_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387416858_0.png",
"https://kpenggs.com/business_guru_admin/Product_Image/172387418142_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387419276_0.png",
"https://kpenggs.com/business_guru_admin/Product_Image/172387432101_0.webp",
"https://kpenggs.com/business_guru_admin/Product_Image/172387438354_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387440436_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387453054_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387459883_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387464676_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387466783_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387469640_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387471809_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387475393_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387478318_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387481066_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387485986_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387488846_0.png",
"https://kpenggs.com/business_guru_admin/Product_Image/172387491329_0.jfif",
"https://kpenggs.com/business_guru_admin/Product_Image/172387493622_0.jfif",
"https://kpenggs.com/business_guru_admin/Product_Image/172387495311_0.jfif",
"https://kpenggs.com/business_guru_admin/Product_Image/172387498217_0.jfif",
"https://kpenggs.com/business_guru_admin/Product_Image/172387499842_0.jfif",
"https://kpenggs.com/business_guru_admin/Product_Image/172387502087_0.jfif",
"https://kpenggs.com/business_guru_admin/Product_Image/172387504200_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387506111_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387509900_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387512260_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387513762_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387515662_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387520487_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387552738_0.png",
"https://kpenggs.com/business_guru_admin/Product_Image/172387555811_0.webp",
"https://kpenggs.com/business_guru_admin/Product_Image/172387558033_0.webp",
"https://kpenggs.com/business_guru_admin/Product_Image/172387559586_0.webp",
"https://kpenggs.com/business_guru_admin/Product_Image/172387565079_0.png",
"https://kpenggs.com/business_guru_admin/Product_Image/172387566830_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387575895_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387578703_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387581077_0.webp",
"https://kpenggs.com/business_guru_admin/Product_Image/172387583054_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387585220_0.webp",
"https://kpenggs.com/business_guru_admin/Product_Image/172387587678_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387600938_0.png",
"https://kpenggs.com/business_guru_admin/Product_Image/172387609796_0.png",
"https://kpenggs.com/business_guru_admin/Product_Image/172387617772_0.webp",
"https://kpenggs.com/business_guru_admin/Product_Image/172387624232_0.webp",
"https://kpenggs.com/business_guru_admin/Product_Image/172387626644_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387724021_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387727071_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387732379_0.webp",
"https://kpenggs.com/business_guru_admin/Product_Image/172387741537_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387746689_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387751754_0.jpg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387755109_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387764283_0.jpeg",
"https://kpenggs.com/business_guru_admin/Product_Image/172387781025_0.webp"
  ]);

  const [isZoomed, setIsZoomed] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsZoomed(true);
    setIsZoomedIn(false); // Start with zoomed out view
  };

  const handleZoomToggle = () => {
    setIsZoomedIn(prev => !prev); // Toggle zoom in/out
  };

  const handleClose = () => {
    setIsZoomed(false);
    setCurrentImage(null);
  };

  return (
    <>
      <Seo pageTitle="KPE Engineering" />
      <Header />
      
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
      </div>

      {isZoomed && (
        <div className="zoom-modal">
          <div className="zoom-content" onClick={handleZoomToggle}>
            <img
              src={currentImage}
              alt="Zoomed"
              style={{ transform: isZoomedIn ? 'scale(1.5)' : 'scale(1)' }} // Toggle zoom
            />
          </div>
          <button className="close-btn" onClick={handleClose}>✕</button>
        </div>
      )}

      <div className="footer-style-four text-light theme-basic-footer position-relative">
        <div className="container-fluid bg-dark text-light footer wow fadeIn">
          <div className="inner-wrapper text-light row justify-content-between">
            <FooterContent />
            <hr className="custom-hr" />
            <CopyrightFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
  // return (
    // <>
    //   <Seo pageTitle="KPE Engineering" />
    //   <Header />
      
    //   <div class="container-fluid">
    // <h2 class="section-heading">Our Highlight</h2>
    //   </div>
    //   <div class="container-fluid">
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172362799088_0.jpg" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172362803096_0.jpg" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172362806178_0.jpg" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172362808880_0.jpg" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172362811076_0.jpg" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172362813318_0.jpg" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172362815467_0.jpg" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172362817413_0.jpg" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172362819443_0.jpg" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172362821713_0.jpg" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172362823934_0.jpg" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387408213_0.jpg" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387413044_0.webp" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387415464_0.jpg" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387416858_0.png" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387418142_0.jpg" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387419276_0.png" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387432101_0.webp" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387438354_0.jpeg" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387440436_0.jpeg" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387453054_0.jpeg" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387459883_0.jpeg" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387464676_0.jpeg" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387466783_0.jpeg" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387469640_0.jpg" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387471809_0.jpeg" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387475393_0.jpg" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387478318_0.jpg" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387481066_0.jpeg" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387485986_0.jpeg" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387488846_0.png" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387491329_0.jfif" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387493622_0.jfif" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387495311_0.jfif" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387498217_0.jfif" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387499842_0.jfif" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387502087_0.jfif" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387504200_0.jpg" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387506111_0.jpg" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387509900_0.jpg" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387512260_0.jpg" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387513762_0.jpeg" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387515662_0.jpeg" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387520487_0.jpeg" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387552738_0.png" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387555811_0.webp" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387558033_0.webp" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387559586_0.webp" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387565079_0.png" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387566830_0.jpg" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387575895_0.jpg" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387578703_0.jpg" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387581077_0.webp" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387583054_0.jpeg" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387585220_0.webp" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387587678_0.jpg" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387600938_0.png" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387609796_0.png" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387617772_0.webp" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387624232_0.webp" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387626644_0.jpg" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387724021_0.jpg" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387727071_0.jpeg" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387732379_0.webp" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387741537_0.jpg" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387746689_0.jpg" alt="Image 2" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387751754_0.jpg" alt="Image 3" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387755109_0.jpeg" alt="Image 4" class="img-fluid"/>
    //     </div>
    //    </div>
    //    <div class="row">
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387764283_0.jpeg" alt="Image 1" class="img-fluid"/>
    //     </div>
    //     <div class="col-md-3">
    //         <img src="https://kpenggs.com/business_guru_admin/Product_Image/172387781025_0.webp" alt="Image 2" class="img-fluid"/>
    //     </div>
    //    </div>
    //   </div>

      


    //       <div className="footer-style-four text-light theme-basic-footer position-relative"><div >
    //         <div className="container-fluid bg-dark text-light footer wow fadeIn">
    //           <div className="inner-wrapper text-light row justify-content-between">
    //           <FooterContent />
    //           <hr className="custom-hr" />
    //           <CopyrightFooter/>
    //           </div>
    //         </div>
            
    //       </div>
    //   </div>
    // </> 
  // );

