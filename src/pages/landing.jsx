import FooterContent from "@/components/footer/FooterContent";
import Seo from "../components/common/Seo";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import CopyrightFooter from "@/components/footer/CopyrightFooter";
import ImageSlider from "./ImageSlider";
import "bootstrap/dist/js/bootstrap";
import CustomCards from "./CustomCards";


const Landing = () => {
  return (
    <>
      <Seo pageTitle="KPE Engineering" />
      <Header />
      <ImageSlider />
      <CustomCards/>
      {/* image with title and paragraph section after customcards, css added in main*/}
      <section className="image-text-section py-4">
        <div className="container">
          <div className="row">
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
      <section className="text-center py-4">
      <h2 className="workflow heading">KP Engineering Services Work Flow & Procedure</h2>
      <br />
      <img src="https://kpenggs.com/assets/images/workflowkp.png" alt="Description of image"  
      className="workflow-image w-100 h-100" />
      </section>
      


      <div className="fancy-feature-twelve position-relative mt-300 xl-mt-200 md-mt-120" id="s2">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-3 text-center" data-aos="fade-right">
              <div className="main-count"> </div>
                <div className="content" style={{ height: '2000px', paddingTop: '80px' }}></div>
            </div>
          </div>
        </div>
      </div>


          <div className="footer-style-four text-light theme-basic-footer position-relative"><div >
            <div className="container-fluid bg-dark text-light footer wow fadeIn">
              <div className="inner-wrapper text-light row justify-content-between">
              <FooterContent />
              <hr className="custom-hr" />
              <CopyrightFooter/>
              </div>
            </div>

            
          </div>
      </div>
    </> 
  );
};

export default Landing;
