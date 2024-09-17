import FooterContent from "@/components/footer/FooterContent";
import Seo from "../components/common/Seo";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import CopyrightFooter from "@/components/footer/CopyrightFooter";
import ImageSlider from "./ImageSlider";


const Landing = () => {
  return (
    <>
      <Seo pageTitle="KPE Engineering" />

      {/* <!--  =============================================
        Theme Header4 Menu
        ============================================== 	--> */}
      <Header />
      <ImageSlider />
      {/* Other content */}
      <div className="content">
        <h1 className="mt-5"></h1>
        <p></p>
        {/* More content */}
      </div>
      {/* <!-- 
			=============================================
				Theme Hero Banner
			============================================== 
			--> */}
      {/* <Hero /> */}
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
            <div
              className="col-xl-2 col-lg-3 text-center"
              data-aos="fade-right"
            >
              <div className="main-count">  
              </div>
              <div className="content" style={{ height: '2000px', paddingTop: '80px' }}>
        <h1 className="mt-5">Page Content</h1>
        <p>Scroll down to see the effect in action.</p>
        {/* Other components and content here */}
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
