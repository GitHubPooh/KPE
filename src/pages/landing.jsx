import FooterContent from "@/components/footer/FooterContent";
import Seo from "../components/common/Seo";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import CopyrightFooter from "@/components/footer/CopyrightFooter";
import ImageSlider from "./ImageSlider";
import "bootstrap/dist/js/bootstrap";


const Landing = () => {
  return (
    <>
      <Seo pageTitle="KPE Engineering" />
      <Header />
      <ImageSlider />
    
  <div class="row1">
    <div class="column">
      <div class="image-text-container">
        <img src="https://kpenggs.com/assets/images/kp1.jpg" alt="Grid 1"/>
        <div class="text-overlay">Pre-Metal</div>
      </div>
    </div>
  
    <div class="column">
      <div class="image-text-container">
        <img src="https://kpenggs.com/assets/images/kp2.jpg" alt="Grid 2"/>
        <div class="text-overlay">Hybrid Pre-Metal</div>
      </div>
    </div>
  
    <div class="column">
      <div class="image-text-container">
        <img src="https://kpenggs.com/assets/images/kp3.jpg" alt="Grid 3"/>
        <div class="text-overlay">Approval Drawing</div>
      </div>
  </div>
</div> 
      
      {/* 
			=============================================
				Feature Section Twelve
			============================================== 
			*/}
      <div
        className="fancy-feature-twelve position-relative mt-300 xl-mt-200 md-mt-120"
        id="s2">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-3 text-center" data-aos="fade-right">
              <div className="main-count">  
              </div>
            <div className="content" style={{ height: '2000px', paddingTop: '80px' }}>
              

                
        
       
            </div>
            </div>
          </div>
          {/* End .row */}
          {/* /.block-wrapper */}
          </div>
        {/* /.container */}
        </div>
    

       {/* <div className="footer-style-nine theme-basic-footer zn2 position-relative">
          <div className="bg-wrapper"> */}
            <div className="footer-style-four text-light theme-basic-footer position-relative">
        <div >
        <div className="container-fluid bg-dark text-light footer wow fadeIn">
        <div className="inner-wrapper text-light row justify-content-between">
              
              <FooterContent />
              <hr className="custom-hr" />
              <CopyrightFooter/>
             </div>
            </div>
          {/* /.container */}
          </div>
        </div>
        {/* /.bg-wrapper */}
      </> 
  );
};

export default Landing;
