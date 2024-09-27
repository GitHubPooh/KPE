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

      {/* Request a quote form : LHS and RHS , css added in main.scss */}

      <div className="container2 fluid quote px-lg-0">
        <div className="row">
        {/* Left Side: Statistics */}
          <div className="col-md-6 left-side">
            <div className="icon">
              <img src="https://kpenggs.com/assets/images/civil.png" alt="Icon Image" className="img-fluid" />
            </div>
              <h1>25+</h1>
              <p>Engineers</p>
            <div className="icon">
            <img src="https://kpenggs.com/assets/images/civil1.png" alt="Icon Image" className="img-fluid" />
            </div>
              <h1>400+</h1>
              <p>Successful Projects</p>
          </div>
        {/* Right Side: Form */}
        <div className="col-md-6 right-side">
          <br />
          <br />
          <h1>Request a Quote</h1>
          <p> Do you have questions on Metal Building OR Storage Building Detailing? Send us
            your query to infokpenggs.com. Our professionals will always be there to assist with your queries.
          </p>
          <form>
            <div className="form-row ">
              <div className="form-group col-md-6">
                <label htmlFor="name"></label>
                <textarea id="name" className="form-control" placeholder="Your Name"  required/>
              </div>
              <div className="form-group col-md-6" >
                <label htmlFor="mobile"></label>
                <textarea id="mobile" className="form-control" placeholder="Your Mobile"  required />
              </div>
            </div>
            
            <div className="form-row ">
              <div className="form-group col-md-6" >
                <label htmlFor="email"></label>
                <textarea id="email" className="form-control" placeholder="Your Email"  required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="note"></label>
                <textarea id="note" className="form-control" placeholder="Special Note"/>
              </div>
            </div>
                <button type="submit" className="btn-submit btn-block col-md-9">Submit</button>
          </form>
         </div>
       </div>
      </div>

      {/* <div className="fancy-feature-twelve position-relative mt-300 xl-mt-200 md-mt-120" id="s2">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-3 text-center" data-aos="fade-right">
              <div className="main-count"> </div>
                <div className="content" style={{ height: '2000px', paddingTop: '80px' }}></div>
            </div>
          </div>
        </div>
      </div> */}

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
